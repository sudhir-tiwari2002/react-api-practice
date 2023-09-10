import React from 'react'
import {useQuery} from 'react-query'
import axios from "axios";

const fetchSuperHero = () =>{
    return axios.get('http://localhost:3000/superheroes')
}
const fetchFriends = () =>{
    return axios.get('http://localhost:3000/friends')
}

const ParallelQuerisPage = () => {
// "Parallel" queries are queries that are executed in parallel, or at the same time so as to maximize fetching concurrency.
    const {data:superHeros }=useQuery('suoer-heros',fetchSuperHero)
    const {data:friends}=useQuery('fetch-friends',fetchFriends)
  return (
    <div>
      parallal queris
    </div>
  )
}

export default ParallelQuerisPage
