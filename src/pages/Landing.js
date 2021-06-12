import React from 'react'
import "../App.css"
import {Link} from 'react-router-dom'

import {SiTripadvisor, SiYelp} from 'react-icons/si'
import {IoLogoFacebook} from 'react-icons/io'

function Landing() {
    return (
        <article className="landing">
            <div className="overlay">
                <section className="title-container">
                    <h1 className="title_logo">海 雅 樓</h1>
                    <h1 className="title">China Kitchen Eatery</h1>

                    <div className="info">
                        <h2 className="info-text">511 Cabana East, Windsor, Ontario</h2>
                        <h2 className='info-text'>(519) 966-2076</h2>
                    </div>

                    <div className="buttons-container">
                        <Link to="/menu">
                            <button className="btn">MENU</button>
                        </Link>
                        <Link to="/location">
                            <button className="btn">LOCATION</button>
                        </Link>
                    </div>

                    <div className="social-container">
                        <a target="_blank" rel="noreferrer" href="https://www.tripadvisor.ca/Restaurant_Review-g155021-d4851496-Reviews-China_Kitchen_Eatery-Windsor_Ontario.html">
                            <div className="social"><SiTripadvisor /></div>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pages/New-China-Kitchen-Eatery/118663061512183">
                            <div className="social"><IoLogoFacebook /></div>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.yelp.ca/biz/china-kitchen-eatery-windsor">
                            <div className="social"><SiYelp /></div>
                        </a>
                    </div>
                </section>
            </div>
        </article>
    )
}

export default Landing
