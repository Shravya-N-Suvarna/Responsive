import React, { useState } from 'react'

export default function Count() {
    const[count,setCount]=useState(0)
  return (
    <div>
        <h1>{count}</h1>
        <div className='bg-orange-500 w-full h-40'>
            <div className='flex flex-row w-full justify-center items-center'>
            <div className='bg-green-500 flex flex-col w-full justify-center items-center 	border-style: solid'>
        <button onClick={()=>setCount(count+1)}>Increase</button></div>
        <div className='bg-blue-500 flex flex-col w-full justify-center items-center 	border-style: solid'><button onClick={()=>setCount(count-1)}>Decrease</button></div>
        </div>
        </div>
        </div>
  )
}
