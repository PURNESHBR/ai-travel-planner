import { Button } from '@/components/ui/button'
import { GetPlaceDetails, PHOTO_REF_URL } from '@/service/GlobalApi';
import React, { useEffect, useState } from 'react'
import { FaMapLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function PlaceCardItem({place}) {
    const [photoUrl,setPhotoUrl]=useState();
  useEffect(()=>{
    place&&GetPlacePhoto();
  },[place])
  const GetPlacePhoto=async()=>{
    const data={
      textQuery:place?.placeName
    }
    const result=await GetPlaceDetails(data).then(resp=>{
      console.log(resp.data.places[0].photos[3].name)
      const PhotoUrl=PHOTO_REF_URL.replace('{NAME}',resp.data.places[0].photos[3].name);
      setPhotoUrl(PhotoUrl);
    })
  }
  return (
    <Link to={'https://www.google.com/maps/search/?api=1&query='+place?.placeName+","+place?.placeAddress} target='_blank'>
        <div className='border rounded-xl p-3 mt-2 flex gap-5 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
            <img src={photoUrl?photoUrl:'Taj-Mahal-Agra-feature.jpg'} alt="photo of place" className='w-[130px] h-[130px] rounded-xl my-16 object-cover' />
            <div>
                <h2 className='font-bold text-lg text-black'>{place?.placeName}</h2>
                <p className='text-sm text-gray-500 my-3'>💬 {place?.placeDetails}</p>
                <p className='text-sm text-gray-500 my-3'>📍 {place?.placeAddress}</p>
                <h2 className='mt-2 text-black'>🕰️ {place?.timeTravel}</h2>
                <h2 className='my-3 text-black'>🪙 {place?.ticketPricing}*<h6 className='text-sm'>*price my vary</h6></h2>
                <h2 className='my-3 text-black'>⭐️ {place?.rating}</h2>
            </div>
        </div>
    </Link>
  )
}

export default PlaceCardItem