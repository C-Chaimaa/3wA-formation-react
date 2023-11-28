import React from 'react'
import { FaArrowRight } from "react-icons/fa";


export default function Card(props) {
  return (
    <div className='ml-4 bg-slate-50 w-60 border rounded'>
      <img className=" w-60 " src={props.image}  />
       <p className='font-bold text-left ml-4 pt-2'>{props.name}</p>
       <p className='text-left text-xs ml-4 pt-2 pb-2'>{props.description}</p>
       <button className='border rounded bg-blue-700  ml-4 text-white p-1 '>Read more <FaArrowRight /></button>
      
    </div>
  )
}
