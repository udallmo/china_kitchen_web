import React from 'react'
import "../App.css"
import Footer from '../components/Footer'
import Header from '../components/Header'
import Zone from '../assets/images/new-delivery-area.png'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import {useGlobalContext} from '../context'

const hours =  {
    "Monday": {
        "start": "03:00 PM",
        "end": "09:00 PM"
    },
    "Tuesday": {
        "start": "CLOSED",
        "end": ""
    },
    "Wednesday": {
        "start": "03:00 PM",
        "end": "09:00 PM"
    },
    "Thursday": {
        "start": "03:00 PM",
        "end": "09:00 PM"
    },
    "Friday": {
        "start": "12:00 PM",
        "end": "10:00 PM"
    },
    "Saturday": {
        "start": "01:00 PM",
        "end": "10:00 PM"
    },
    "Sunday": {
        "start": "03:00 PM",
        "end": "09:00 PM"
    },
    "Holiday - Call to confirm": {
        "start": "03:00 PM",
        "end": "09:00 PM"
    }
}



function Location() {
    const {checkRef} = useGlobalContext()

    const mapStyles = {        
        height: "50vh",
        width: "70%"};
      
    const defaultCenter = {
        lat: 42.258170, lng: -82.995180
    }

    const point =    {
        name: "Location 5",
        location: { 
          lat: 42.258170,
          lng: -82.995180
        }
    }

    return (
        <>
        <article className="location" onClick={(e)=> checkRef(e)}>
            <Header />
            <section className="heading-container">
                <h1 className="heading">LOCATION</h1>
                <div className="separator"></div>
                <h3 className="location-header">
                511 Cabana Road East, Windsor, ON   N9G 1A5
                </h3>
            </section>

            <section className="location-info">
                <div className="list-container-location">
                    <h1 className="list-header">HOURS</h1>
                    <div className="list-separator"></div>
                    <div className="hour-container">
                        <div className="hours">
                            {Object.entries(hours).map(hour => {
                                const day = hour[0]
                                const start = hour[1].start
                                const end = hour[1].end

                                const displayTime = (start === "CLOSED") ? start : start+"-"+end 

                                return (
                                    <div key={day} className="time-section">
                                        <strong>{day}</strong>
                                        <div className="time">
                                        {displayTime}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>

                <div className="list-container-location">
                    <h1 className="list-header">DELIVERY ZONE</h1>
                    <div className="list-separator"></div>

                    <div className="delivery-section">
                        <div className="time-section">PICK-UP ORDERS (over $25.00 before tax) 10% OFF (Cash Only)</div>
                        <div className="time-section">PICK-UP ORDERS (over $25.00 before tax) 5% OFF (with Credit Card)</div>
                        <div className="time-section">Free delivery on orders of $25.00 before tax & up (Cash only)</div>
                        <img src={Zone} alt="delivery-zone" width="250px"/>
                    </div>
                </div>
            </section>
            <div className="map">
            <LoadScript
                googleMapsApiKey='AIzaSyBM6mLW7BVsT9BubqUSMIOAysebdIYNooY'>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={16}
                    center={defaultCenter}
                >
                <Marker key={point.name} position={point.location} />
                </GoogleMap>
            </LoadScript>
            </div>
        </article>
            <Footer />
        </>
    )
}

export default Location;
