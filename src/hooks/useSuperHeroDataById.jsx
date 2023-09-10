import {useQuery} from 'react-query'
import axios from "axios";

// const fetchSuperHero = heroId =>{
//     return axios.get(`http://localhost:3000/superheroes/${heroId}`)
// }


// export const useSuperHeroDataById = (heroId) =>{
//     console.log(heroId,".......")
//     return useQuery(['super-hero',heroId],()=>fetchSuperHero(heroId))
// }


const fetchSuperHero = ({queryKey}) =>{
    const heroId = queryKey[1]
    return axios.get(`http://localhost:3000/superheroes/${heroId}`)
}



export const useSuperHeroDataById = (heroId) =>{
    console.log(heroId,".......")
    return useQuery(['super-hero',heroId],fetchSuperHero)
}