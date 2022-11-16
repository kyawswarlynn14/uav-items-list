import React from 'react'
import { useState,useEffect } from 'react'

const Table = ({item}) => {
    const [data, setData] = useState({data : []})

    useEffect(() => {
      fetch(`http://localhost:1337/api/${item}?populate=*`)
      .then(res => res.json())
      .then(res => setData(res))
    }, [])
  return (
    <div>
        <h1 className='text-xl font-bold text-center py-4'>
            {item.toUpperCase()} List
        </h1>

        <div className='flex text-cyan-400 font-bold border-b-2 border-blue-500 pb-2'>

                <p className='text-lg w-[7%]'>
                    ID
                </p>

                <p className='text-lg w-[30%]'>
                    Images
                </p>

                <p className='text-lg w-[30%]'>
                    Description
                </p>

                <p className='text-lg w-[18%]'>
                    Quantity
                </p>

                <p className='text-lg w-[15%]'>
                    Delete
                </p>
        </div>

        {
            data.data.map(item => (
            <div className='flex my-4' key={item.id}>
                <p className='w-[7%]'>
                {item.id}
                </p>

                <div className='w-[30%]'>
                <img
                className='w-40 h-fit rounded-lg' 
                src={`http://localhost:1337${item?.attributes?.images?.data[0]?.attributes?.url}`} alt="" />
                </div>

                <p className='w-[30%]'>
                {item.attributes.description}
                </p>

                <p className='w-[18%]'>
                {item.attributes.quantity}
                </p>

                <div className=' w-[15%]'>
                <button className='bg-red-500 cursor-pointer p-2 rounded-lg'>delete</button>
                </div>

            </div>
            ))
        }
    </div>
  )
}

export default Table