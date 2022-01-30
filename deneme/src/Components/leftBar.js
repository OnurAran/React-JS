import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import LeftLinks from "./leftLinks"




const sideLinks = [
    {
        name: "Merhaba!",

    },
    {
        name: "Selam",
    },
    {
        name: "Nasılsın?",
    },
    {
        name: "İyiyim",
    },
]



class leftBar extends Component {

    onClickEvent = (name,e) => {
        console.log(name)
    }
    render() {
        return (
            <div className="Left">
                <nav>
                    <ul className="ul" onClick = {this.onClickEvent.bind(this,"deneme")}>
                        
                        {sideLinks.map(({ name }) => (
                            <LeftLinks key={name} name={name}  />
                        ))}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default leftBar;
