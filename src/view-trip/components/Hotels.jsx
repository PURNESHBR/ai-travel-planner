import React from 'react'
import { Link } from 'react-router-dom'
import HotelCardItems from './HotelCardItems'

function Hotels({trip}) {
  return (
    <div>
        <h2 className='font-bold text-xl mt-5'>Hotel Recmmendation:</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5 my-5'>
            {trip?.tripdata?.hotelList?.map((hotel,index)=>(
                <HotelCardItems hotel={hotel}/>
            ))}
        </div>
    </div>
    
  )
}

export default Hotels