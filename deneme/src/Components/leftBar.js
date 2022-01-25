import React from 'react';
import { Link } from 'react-router-dom';
import LeftLinks from "./leftLinks"

const sideLinks = [
    {
        name: "Merhaba",
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


const leftBar = () => {
    return <div className="Left">
        <h5>YEMEK BİLMEM NE</h5>

        <nav>
            <ul className="ul">
                {sideLinks.map(({ name }) => (
                    <LeftLinks key={name} name={name} />
                ))}
            </ul>
        </nav>



    </div>;
};

export default leftBar;

/*
<li className="ListLeft">deneme 1</li>
                <li className="ListLeft">deneme 2</li>*/