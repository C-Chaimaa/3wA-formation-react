import React from 'react'
import { IoIosFlash } from "react-icons/io";
import Card from './compenent/Card';
import data from './assets/data'

export default function App() {
  return (
   <div>
    <h1 className='text-center uppercase text-white mt-4 mb-2 flex items-center justify-center '>characters<IoIosFlash /></h1>
    <div className='  grid gap-4 grid-cols-3 grid-rows-2'>

      {data.map((item, index)=>
     <Card key={index} name={item.name } image={item.image} description={item.description}></Card>
      )}
   
    
    </div>
    </div>
  )
}
