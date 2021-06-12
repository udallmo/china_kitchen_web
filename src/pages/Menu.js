import React, {useState, useEffect} from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuItem from '../components/MenuItem'
import { useGlobalContext } from '../context'

import TAGS from '../assets/data/tag.json'
import MENU from '../assets/data/menu.json'

const changes = ["Combinations", "Deluxe Dinners", "Standard Dinners"]

function Menu() {
    const [menuList, setMenuList] = useState({})
    const [filteredList, setFilteredList] = useState({})
    const [tagList, setTagList] = useState([])
    const [active, setActive] = useState([])
    const {checkRef} = useGlobalContext()

    const handleTag = (tag) => {
        if (active.includes(tag)) {
            setActive([...active.filter(item => item !== tag)])
            delete filteredList[tag]
            setFilteredList({...filteredList})
        } else {
            setActive([...active, tag])
            setFilteredList({[tag]: menuList[tag], ...filteredList})
        }
    }

    useEffect(() => {
        setMenuList(MENU)
        setTagList(TAGS)
    }, [])
    
    const displayList = Object.keys(filteredList).length === 0 ? menuList : filteredList
    return (
        <div>
        <article className="menu" onClick={(e) => checkRef(e)}>
            <Header/>
            <section className="heading-container">
                <h1 className="heading">MENU</h1>
                <div className="separator"></div>
            </section>

            <section className="option-container">
                <div className="option-list">
                    {tagList.map(tag => {
                        return <button key={tag} className={`${active.includes(tag) ? 'active' : ""} option`} onClick={() =>handleTag(tag)}>{tag}</button>
                    })}
                </div>
            </section>

            <section className="menu-container">
                {Object.keys(displayList).map(key => {
                    return (
                        <div key={key} className="list-container">
                            <h1 className="list-header">{key}</h1>
                            <div className="list-separator"></div>
                            <div className="extra-text-wrapper">
                                {key === "Combinations" && <p><strong style={{'color': "black"}}>Served with: Pop or Wonton Soup, Egg Roll, Chicken Fried Rice & Cookies</strong></p>}
                                {changes.includes(key) && <p><strong>PLEASE NOTE:  Any changes requested for the items below will be subject to an additional charge.</strong></p>}
                            </div>
                            <MenuItem item={displayList[key]}/>
                        </div>
                    )
                })}
            </section>
        </article>
        <Footer />
        </div>
    )
}

export default Menu
