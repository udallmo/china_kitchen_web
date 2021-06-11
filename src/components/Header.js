import React, {useEffect, useState} from 'react'
import logo from '../assets/images/china_kitchen_logo.png'
import {Link, useLocation} from 'react-router-dom'
import "../App.css"
import {FaBars} from 'react-icons/fa'
import {IoMdClose} from 'react-icons/io'

import {useGlobalContext} from '../context'

const getWindowSize = () => {
    const {innerWidth: width, innerHeight: height} = window;

    return {
        width,
        height
    };
}

function Header() {
    const [windowDim, setWindowDim] = useState(getWindowSize())
    const [selectedState, setSelectedState] = useState(useLocation().pathname.replace("/", ""))
    const {isSidebarOpen, closeSidebar, openSidebar, sideRef} = useGlobalContext()

    useEffect(() => {
        const handleResize = () => {
            setWindowDim(getWindowSize())
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, []);

    const changePath = (path) => {
        setSelectedState(path)
        closeSidebar()
    }

    if (windowDim.width <= 600) {
        return (
            <section className="header">
                <div className="bars" onClick={() => openSidebar()}>
                    <FaBars />
                </div>

                { isSidebarOpen && 
                    <div ref={sideRef} className="sidenav">
                        <h3 className="sidenav-header">Explore <IoMdClose onClick={() => closeSidebar()} className="close-icon"/></h3>
                        <div className="sidenav-line"></div>
                        <Link to="/menu" className={`${selectedState === "menu" ? "selected" : ""}`} onClick={() => changePath("menu")}>Menu</Link>
                        <Link to="/location" className={`${selectedState === "location" ? "selected" : ""}`} onClick={() => changePath("location")}>Location</Link>
                        <a href="tel:2262463079">Call Us</a>
                        
                    </div>
                }
            </section>
        )
    }

    return (
        <section className="header">
            <Link to="/"><img src={logo} alt="china kitchen eatery"/></Link>
            <div className="header-list">
                <Link to="/menu" className={`${selectedState === "menu" ? "selected" : ""}`} onClick={() => setSelectedState("menu")}>Menu</Link>
                <Link to="/location" className={`${selectedState === "location" ? "selected" : ""}`} onClick={() => setSelectedState("location")}>Location</Link>

                <button className="btn">CALL US</button>
            </div>
        </section>
    )
}

export default Header
