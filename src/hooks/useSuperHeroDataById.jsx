import {useQuery, useQueryClient} from 'react-query'
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
    const queryClient= useQueryClient()
    // console.log(heroId,".......")
    return useQuery(['super-hero',heroId],fetchSuperHero,{
        initialData:()=>{
            const hero=queryClient.getQueriesData('super-heros')?.data?.find(hero => hero.id === parseInt(heroId))

            if(hero){
                return {
                    data: hero
                }
                
            }
            else {
                return undefined
            }
        }
    })
}