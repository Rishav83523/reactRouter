import React, { useEffect, useState } from 'react';

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/mr-raj2001').then(res => res.json()).then(data => { console.log(data); setData(data) });
    }, [])
  return (
      <div className='text-center m-4 bg-gray-600 text-white text-3xl p-4'>Github followers: {data.followers}
      <img src={data.avatar_url} alt="avatar" className="rounded-full h-48 w-48 mx-auto" /></div>
      
  )
}

export default Github