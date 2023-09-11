import React from "react";
import axios from "axios";
import { useQuery, useInfiniteQuery } from "react-query";
import { useState } from "react";
import Fragment from "react";

const fetchColor = ({ pageParam = 1 }) => {
  return axios.get(`http://localhost:3000/colors?_limit=2&_page=${pageParam}`);
};

const InfiniteQueriesPage = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["color"], fetchColor, {
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });

  if (isLoading) {
    return <h1>Loading ....</h1>;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }

  return (
    <>
      <div>
        {data?.pages.map((group, idx) => {
          return (
            <div key={idx}>
              {group.data.map((color) => (
                <h2 key={color.id}>
                  {" "}
                  {color.id}: {color.color}
                </h2>
              ))}
            </div>
          );
        })}
      </div>
      <div>
        <button disabled={!hasNextPage} onClick={fetchNextPage}>
          Load more
        </button>
      </div>
      <div>{isFetching && isFetchingNextPage ? "fetching...." : null}</div>
    </>
  );
};

export default InfiniteQueriesPage;
