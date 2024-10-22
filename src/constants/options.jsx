

export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A Solo Traveler',
        icon:'✈️',
        people:'1'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two Travelers',
        icon:'🥂',
        people:'2'
    },
    {
        id:3,
        title:'Family',
        desc:'A Group Of Fun Loving Adventure',
        icon:'🧑‍🧑‍🧒‍🧒',
        people:'3 to 5 '
    },
    {
        id:4,
        title:'Friends',
        desc:'A Group Of Fun & Loving Friends',
        icon:'🫂',
        people:'3 to 10 '
    }
]

export const SelectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Budget Friendly',
        icon:'🪙',
    },
    {
        id:2,
        title:'Moderate',
        desc:'Keep Cost On Average Side',
        icon:'💵',
    },
    {
        id:3,
        title:'Expensive',
        desc:'Dont Worry About Cost ',
        icon:'💰',
    }
]

export const AI_PROMPT='Generate Travel Plan For Location :{location} , for {totalDays} days for {traveler} People with a {budget} budget , give me Hotals list with hotal Name , hotal address  ,Price , hotal image url  , Geo Coordinates  , ratings ,description and suggest itinerary with Place name ,place address,place details ,place image url ,Geo Coordinates ,rating, ticket pricing , Time Travel each of the Location for {totalDays} days with each Day plan with best time to visit in JSON formate the JSON file should contain key hotelList inside it there should be hotal Name in key hotelName , hotal address  in key hotalAddress ,Price in keyw price, hotal image url in key hotalImageUrl , Geo Coordinates in key geoCoordinates , ratings in key ratings,description in key description and inside key itinerary there should be place name in key placeName ,place address in key placeAddress ,place details in key placeDetails ,place image url in key placeImageUrl,Geo Coordinates in key geoCoordinates , rating in key rating ,ticket pricing in key ticketPricing , Time Travel in key timeTravel.' 