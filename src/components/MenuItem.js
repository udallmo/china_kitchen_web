import React from 'react'
import {FaPepperHot} from 'react-icons/fa'


function MenuItem({item}) {
    return (
        <section className="menu-item-container">
            {item.map((obj, index) => {
                const {name, desc, price, each, spicy} = obj
                const eachBuilder = (each) => {
                    if (each.length > 1) {
                        return (
                        <>
                            <div>
                            {each.map((e, i) => {
                                return <div key={i} className="each">{e}</div>
                            })}
                            </div>

                            <div className="cost">
                            {price.map((e, i) => {
                                return <div key={i}>{e}</div>
                            })}
                            </div>
                        </>
                        )
                    } 

                    return (
                        <>
                            <div>
                                <div className="each">{each}</div>
                            </div>
                            <div>
                                <div className="cost">{price}</div>
                            </div>
                        </>
                    )
                }
                
                const descBuilder = () => {
                    if (Array.isArray(desc)) {
                        return (
                            <div>
                                {desc.map((d, index) => {
                                    return <div key={index} className="desc">{d}</div>
                                })}
                            </div>
                        )
                    }

                    return <div className="desc">{desc}</div>
                }
            
                return (
                    <div key={index} className="menu-item">
                        <div className="menu-header">
                            <div className="name-container">
                                <div className="name">{name} {spicy && <FaPepperHot className="spicy"/>}</div>
                                {descBuilder()}
                            </div>
                            {eachBuilder(each)}
                        </div>
                    </div>
                )
            })}
        </section>
    )
}

export default MenuItem
