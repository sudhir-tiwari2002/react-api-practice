import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'


const fetchUserByEmail = (email) =>{
    return axios.get(`http://localhost:3000/users/${email}`)
}

const fetchCoursesByChannelId = (channelId)=>{
    return axios.get(`http://localhost:3000/channels/${channelId}`)
}

const DependentQueries = ({email}) => {

    const {data:user}=useQuery(['user',email],()=>fetchUserByEmail(email)) // by the help of this query we are checking that the user exist or not 

    const channelId = user?.data?.channelId       // if user exist then we are fetching channel id by the user query 

    const {data:coursesData} = useQuery(['courses',channelId],()=>fetchCoursesByChannelId(channelId),{ // using that channel id to fetch the course data 
        enabled: !!channelId
    })

  return (
    <div>
     <h1>dependent queries courses </h1>
     {
        coursesData?.data?.courses.map((course , idx) =>{
            return(
                <div key={idx}>
                    {course}
                </div>
            )
        })
     }
    </div>
  )
}

export default DependentQueries
