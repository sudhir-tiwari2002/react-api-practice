import React from 'react'
import axios from 'axios'
import {useQuery} from 'react-query'
import {useState} from 'react'

const fetchColor =(pageNumber)=>{
    return axios.get(`http://localhost:3000/colors?_limit=2&_page=${pageNumber}`)
}

const PaginatedQueries = () => {
    const [pageNumber, setPageNumber] = useState(1)

    const {data, isLoading, isError, error}=useQuery(['color',pageNumber],()=>fetchColor(pageNumber),{
        keepPreviousData : true
    })

    if(isLoading){
        return <h1>Loading ....</h1>
    }

    if(isError){
        return <h1>{error.message}</h1>
    }

  return (
    <>
    <div>
     {
        data?.data.map((color)=>{
            return (
                <div key={color.id}>
                    {color.id} : {color.color}
                </div>
            )
        })
     }
    </div>
    <div className="flex flex-wrap gap-3">
        <button onClick={()=>setPageNumber(pageNumber-1)} disabled={pageNumber ===1} className=" bg-red-400 p-2 rounded-lg">Previous Page</button>
        <button onClick={()=>setPageNumber(pageNumber+1)} className=" bg-green-400 p-2 rounded-lg">Next Page</button>

    </div>
    </>
    
  )
}

export default PaginatedQueries
