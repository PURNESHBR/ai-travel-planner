import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function HotelCardItems({hotel}) {
    const [photoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    hotel&&GetPlacePhoto();
  },[hotel])
  const GetPlacePhoto=async()=>{
    const data={
      textQuery:hotel?.hotelName
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[2].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+hotel?.hotelName+","+hotel?.hotelAddress} target='_blank'>
        <div className='hover:scale-105 transition-all cursor-pointer hover:shadow-md border rounded-xl'>
            <img src={photoUrl?photoUrl:'Taj-Mahal-Agra-feature.jpg'} alt="picture of hotel" className='rounded-xl h-[200px] w-full object-cover' />
            <div className='my-2 flex flex-col gap-2 '>
                <h2 className='font-medium text-black'>{hotel?.hotelName}</h2>
                <h2 className='text-xs text-gray-500'>📍 {hotel?.hotelAddress}</h2>
                <h2 className='text-sm text-black'>💵 {hotel?.price}</h2>
                <h2 className='text-sm text-black'>⭐️ {hotel?.ratings}</h2>
                <h2 className='text-sm text-black'>💬 {hotel?.description}</h2>
            </div>
        </div>
    </Link>
  )
}

export default HotelCardItems