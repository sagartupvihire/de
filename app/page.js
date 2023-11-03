"use client"
import { userAgent } from 'next/server'
import React, { useState } from 'react'

const page = () => {
  const [username, setUserName] = useState("")
  return (
    <>
    <h1>enter your name{username}</h1>
    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="enter your name"/>
    <h1>{username}</h1>
    <button className='btn' onClick={()=>{setUserName("sagar")}}>update </button>
    </>
  )
}

export default page