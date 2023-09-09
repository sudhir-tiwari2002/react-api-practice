import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TraditonalSuperHeroes() {
  const [isloading,setIsLoading] =useState(true)
  const [data, setData] =useState([])


  useEffect(()=>{
    axios.get('http://localhost:3000/superheroes').then((res)=>{
      setData(res?.data)
      setIsLoading(false)
    })
  },[])

  if(isloading){
    return <h1>Loading......</h1>
  }
 

  return (
    <>
    <h1 className='flex justify-center font-extrabold text-7xl'>Traditonal Super Heroes Page </h1>
    {
      data?.map((item)=>(
        <div key={item?.id} className='gap-5 bg-red-200'>
          <h1 className=' gap-5 bg-green-300 mt-5'>SuperHero No. {item?.id}</h1>        
          <p>super hero id : {item?.id}</p>
          <p>super hero name : {item?.name}</p>
          <p>super hero alterego : {item?.alterEgo}</p>
        </div>

      ))
    }
    
    </>
  );
}

export default TraditonalSuperHeroes;
