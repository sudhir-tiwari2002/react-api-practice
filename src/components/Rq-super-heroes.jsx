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
      // cacheTime: 6000,                // Bydefault cachetime of a query is 5 mint after 5 mint query will be garbage collected . but we can initilize the catchtime by doing this
      // staleTime: 30000,              // query cache helps us to prevent the unneccessary newtwork call by the setting stale time query will fresh till the stale time over and it will prevent to network call. default stale time is 0 second because many application need to fetch fresh data on every second 
        refetchOnMount : 'always',     // by default it is set to true if it is set to true query will refech on mount if the data is stale , data will fetch every time component mount
                                      // by setting the refetchOnmount always in the string the refeching will be done irreseptive on the stale , true is the best option 
      refetchOnWindowFocus:true,     // bydefault it is set to true , everytime when user open the particular ui tab refech will perform
      refetchInterval: 2000,         // polling refers to feching data on the regular intervals , by default it is set to false if we set any time the query will refetch data on that particular time stamp . In our case i am setting the refechinterval 2 second that means after every 2 second data will refech
      refetchIntervalInBackground:true  // it will usefull to refetch data even when the brouser is not in focus (ON)
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
