import {useQuery} from 'react-query'
import axios from "axios";

const fetchSuperHeros = () => {
    return axios.get("http://localhost:3000/superheroes");
  };


export const useSuperHeroData = (onSuccess,onError) =>{
    return useQuery(
        "super-heroes",
        fetchSuperHeros,
        {  
        onSuccess,
        onError,
        //  select:(data)=>{
        //     const superHeroNames = data?.data?.map(hero => hero.name)
        //     return superHeroNames
        //   },
        }
             );
}

