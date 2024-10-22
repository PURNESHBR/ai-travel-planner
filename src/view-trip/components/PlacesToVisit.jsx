import React from 'react'
import PlaceCardItem from './PlaceCardItem'
//<h2 className='font-medium text-sm text-orange-600'>{place?.timeTravel}</h2> befor line no 15
function PlacesToVisit({trip}) {
  return (
    <div>
        <h2 className='font-bold text-lg my-5'>Places To Visit:</h2>
        <div>
            {trip?.tripdata?.itinerary?.map((item,index)=>(
                <div className='mt-5'>
                    <h2 className='font-medium text-lg'>DAY:{item.day}</h2>
                    <div className='grid md:grid-cols-2 gap-5'>
                        {item?.plan?.map((place,index)=>(
                            <div>
                                <PlaceCardItem place={place}/>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PlacesToVisit