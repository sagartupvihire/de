"use client"
import { userAgent } from 'next/server'
import React, { useState } from 'react'

const page = () => {
  const [username, setUserName] = useState("")
  return (
    <>
    <h1>enter your name{username}</h1>
    <h1>{username}</h1>
    <button className='btn' onClick={()=>{setUserName("sagar")}}>update </button>
    </>
  )
}

export default page