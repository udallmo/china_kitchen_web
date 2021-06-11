import React from 'react'
import {SiTripadvisor, SiYelp} from 'react-icons/si'
import {IoLogoFacebook} from 'react-icons/io'

function Footer() {
    return (
        <footer className="footer">

<div className="social-container">
                        <a target="_blank" rel="noreferrer" href="https://www.tripadvisor.ca/Restaurant_Review-g155021-d4851496-Reviews-China_Kitchen_Eatery-Windsor_Ontario.html">
                            <div className="footer-social"><SiTripadvisor /></div>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.facebook.com/pages/New-China-Kitchen-Eatery/118663061512183">
                            <div className="footer-social"><IoLogoFacebook /></div>
                        </a>

                        <a target="_blank" rel="noreferrer" href="https://www.yelp.ca/biz/china-kitchen-eatery-windsor">
                            <div className="footer-social"><SiYelp /></div>
                        </a>
                    </div>
            <div>
            Copyright © 2021 China Kitchen Eatery - All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer
