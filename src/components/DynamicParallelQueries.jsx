import React from 'react'
import { useQueries } from 'react-query'
import axios from 'axios'

const fetchSuperHero = (heroId) =>{
    // console.log(heroId)
    return axios.get(`http://localhost:3000/superheroes/${heroId}`)
}

const DynamicParallelQueries = ({heroIds}) => {

   const queryResults= useQueries(
        heroIds.map((id )=> {
            return {
                queryKey:['super-hero',id],
                queryFn:()=>fetchSuperHero(id),
            }
        })
    )

    // console.log(queryResults,"------")


// const results = useQueries({
//     queries: [
//       { queryKey: ['super-hero', 1], queryFn: fetchSuperHero(1)},
//       { queryKey: ['super-hero', 2], queryFn: fetchSuperHero(2)}
//     ]
//   })


// const ids = [1,2,3]
// const results = useQueries({
//   queries: ids?.map(id => (
//     { queryKey: ['super-hero', id], queryFn: () => fetchSuperHero(id), staleTime: Infinity }
//   )),
// })

   
    
  return (
    <div>
      dynamic parallel queris
    </div>
  )
}

export default DynamicParallelQueries
