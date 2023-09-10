import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchSuperHeros = () => {
  return axios.get("http://localhost:3000/superheroes");
};

function RqSuperHeroes() {
  const { isLoading, data, isError, error } = useQuery(
    "super-heroes",
    fetchSuperHeros,
    {
      cacheTime: 6000, // Bydefault cachetime of a query is 5 mint after 5 mint query will be garbage collected . but we can initilize the catchtime by doing this
    }
  );

  // const {isLoading,data} =useQuery('super-heroes',()=>{ return axios.get('http://localhost:3000/superheroes')})

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1> {error.message}</h1>;
  }

  return (
    <>
      <h1> welcome from the pages of RQ super Heros</h1>
      {data?.data?.map((item) => (
        <div key={item?.id}>
          <p>ID of Super hero : {item?.id}</p>
          <p>Name of the Super Hero : {item?.name}</p>
          <p>AlterEgo of the Super Hero : {item?.alterEgo}</p>
        </div>
      ))}
    </>
  );
}

export default RqSuperHeroes;
