import React, {useState, useEffect} from 'react'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import { SliderSwiper } from './SliderSwiper'
import Spinner from './Spinner'

function Slider() {
  const [loading, setLoading] = useState(true)
  const [listings, setListings] = useState(null)


  useEffect(() => {
    const fetchListings = async() => {
        const listingsRef = collection(db, 'listings')
        const q = query(listingsRef, orderBy('timestamp','desc'), limit(5))

        const querySnap = await getDocs(q)

        let listings = []

        querySnap.forEach((doc => {
            return listings.push({
                id: doc.id,
                data: doc.data()
            })
        }))
        setListings(listings)
        setLoading(false)
    }

    fetchListings()
    


  },[])

  if(loading){
    return <Spinner />
  }

  if (listings.length === 0) {
    return <></>
  }


  return( listings && (
    <>
      <p className="exploreHeading">Recommended</p>
      <SliderSwiper listings={listings} />
    </>
  )) 
}

export default Slider