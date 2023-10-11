import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

  const data = useLoaderData()

  // const [data, setData] = useState([])
  // useEffect(() => {
  //   fetch('https://api.github.com/users/hiteshchoudhary')
  //   .then((res) => res.json())
  //   .then((data) => setData(data))
  // }, [])
  return (
    <div className=' bg-gray-400 text-center text-3xl m-4 p-4'>Github Followers: {data.followers}
    <img src={data.avatar_url} alt="github image" width={300}/>
     </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}