import React from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

function RqSuperHeroes() {
  const {isLoading,data} =useQuery('super-heroes',()=>{return axios.get('http://localhost:3000/superheroes')})

  if(isLoading){
    return (<h1>Loading...</h1>)
  }
  
  return (
    <>
      <h1> welcome from the pages of RQ super Heros</h1>
      {
        data?.data?.map((item)=>(
          <div key={item?.id}>
            <p>ID of Super hero : {item?.id}</p>
            <p>Name of the Super Hero : {item?.name}</p>
            <p>AlterEgo of the Super Hero : {item?.alterEgo}</p>

          </div>
        ))
      }
      </>
  );
}

export default RqSuperHeroes;
