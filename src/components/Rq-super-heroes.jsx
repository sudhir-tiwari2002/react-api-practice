import React from "react";
import {
  useSuperHeroData,
  useAddSuperHeroData,
} from "../hooks/useSuperHeroData";
import { Link } from "react-router-dom";
import { useState } from "react";
// import { useQuery } from "react-query";
// import axios from "axios";

// const fetchSuperHeros = () => {
//   return axios.get("http://localhost:3000/superheroes");
// };

function RqSuperHeroes() {
  const [name, setName] = useState("");
  const [alterEgo, setAlterEgo] = useState("");

  const onSuccess = (data) => {
    console.log("perform side effect after data fetching", data);
  };
  const onError = (error) => {
    console.log("perform side effect after encoutering error", error);
  };

  const { mutate } = useAddSuperHeroData();

  const { isLoading, data, isError, error, refetch } = useSuperHeroData(
    onSuccess,
    onError
  );
  // const { isLoading, data, isError, error , refetch} =
  // useQuery(
  //   "super-heroes",
  //   fetchSuperHeros,
  //   {
  //     // cacheTime: 6000,                // Bydefault cachetime of a query is 5 mint after 5 mint query will be garbage collected . but we can initilize the catchtime by doing this
  //     // staleTime: 30000,              // query cache helps us to prevent the unneccessary newtwork call by the setting stale time query will fresh till the stale time over and it will prevent to network call. default stale time is 0 second because many application need to fetch fresh data on every second
  //     // refetchOnMount : 'always',     // by default it is set to true if it is set to true query will refech on mount if the data is stale , data will fetch every time component mount
  //                                     // by setting the refetchOnmount always in the string the refeching will be done irreseptive on the stale , true is the best option
  //     // refetchOnWindowFocus:true,     // bydefault it is set to true , everytime when user open the particular ui tab refech will perform
  //     // refetchInterval: 2000,         // polling refers to feching data on the regular intervals , by default it is set to false if we set any time the query will refetch data on that particular time stamp . In our case i am setting the refechinterval 2 second that means after every 2 second data will refech
  //     // refetchIntervalInBackground:true  // it will usefull to refetch data even when the brouser is not in focus (ON)
  //     // enabled:false,                 // suppose i don't need to fetch data on the component mount the by the setting enable false newtwork call will not triggered [ if i want to trigger network request on the click of a button then we use refetch method of api call]

  //   // lets learn about callbacks using react query we are dealing with data fatching sometimes you might want to perform some side- effect when the quwery complete and example to open modal or navigating routes etc
  //   // react query automatically enjects the data and error into these callbacks
  //   onSuccess: onSuccess,
  //   onError:onError,
  //     // Data Transformation :- if you fetch data from any API before i am pretty sure you have run into the synario of leaving
  //     // to transfor data into the format that the frontend component can consume, the backend folks have theri own convension
  //     // and the frontend might have different convention to help these synarios react query provides select configuration option
  //     // which we can specify usequery hook
  //     // in the api you can check that Api returns an array of object and we extract data from the object

  //     select:(data)=>{
  //       const superHeroNames = data?.data?.map(hero => hero.name)
  //       return superHeroNames
  //     },
  //   }
  //        );

  // const {isLoading,data} =useQuery('super-heroes',()=>{ return axios.get('http://localhost:3000/superheroes')})

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1> {error.message}</h1>;
  }

  const handleAddClick = () => {
    console.log({ name, alterEgo });
    const hero = {
      name,
      alterEgo,
    };
    mutate(hero);
  };

  return (
    <>
      <h1> welcome from the pages of RQ super Heros</h1>

      <div className=" flex gap-2 mb-2">
        <input
          className=" outline"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className=" outline"
          type="text"
          value={alterEgo}
          onChange={(e) => setAlterEgo(e.target.value)}
        />
        <button
          className=" outline bg-gray-300 rounded-lg p-2"
          onClick={handleAddClick}
        >
          Add hero
        </button>
      </div>
      <button
        onClick={refetch}
        type="button"
        className="bg-green-300 p-2 rounded-lg"
      >
        Fetch heroes
      </button>
      {data?.data?.map((item) => (
        <div key={item?.id}>
          <Link to={`/new-super-hero/${item?.id}`}> {item?.name}</Link>
          <p>ID of Super hero : {item?.id}</p>
          <p>Name of the Super Hero : {item?.name}</p>
          <p>AlterEgo of the Super Hero : {item?.alterEgo}</p>
        </div>
      ))}

      {/* here just extract (transform) the superheroname by the whole data  
      
      data transformation is also incule data filtering i have used map method but here can be use filter method to select few elements
      from the data returned
      */}
      {/* {
        data.map(heroName=>{
          return(<div key={heroName}>{heroName}</div>)
        })
      } */}
    </>
  );
}

export default RqSuperHeroes;
