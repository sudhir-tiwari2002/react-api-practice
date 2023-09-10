import React from 'react'
import { useSuperHeroData } from '../hooks/useSuperHeroData'
import { useParams } from 'react-router-dom'
import { useSuperHeroDataById } from '../hooks/useSuperHeroDataById'

function NewSuperhero() {
    const {heroId} = useParams()
    console.log(heroId,"<<<<<<<")

    const {isLoading,data,isError,error}=useSuperHeroDataById(heroId)

    if(isLoading){
        return <h1>Loading....</h1>
    }

    if(isError){
        return <h1>{error.message}</h1>
    }
console.log(data,">>>>>")

  return (
    <div>
      {data?.data?.name} - {data?.data?.alterEgo}
    </div>
  )
}

export default NewSuperhero

