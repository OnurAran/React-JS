import React from 'react';

const leftLinks = ({name}) => {
  return(

    <li>
        <a href="#" className="ListLink">
            <div className="ListL">
            <div className="ListLeft">
                <span>{name}</span>
            </div>
            </div>
        </a>
    </li>



  )
};

export default leftLinks;
