import React, { Component } from 'react';
import "./content.css"
import resim from "./icon.png"
import yemek from "./yemek.jpg"


class content extends Component {
  render() {

    const {title,date,username,contentoftitle} = this.props;

    return (
      <main className="Main">

      <div className="compenent">
        <div className="inContent">
          <img src={resim} alt="Profile" className="resim" />
          <h6 className="textUser">@{username}</h6>
          <h2 className="text" >{title}</h2>
          <h6>{date}</h6>

        </div>

        <h6 className="contents" >  {contentoftitle} </h6>

        <img src={yemek} alt="Profile2" className="Altresim" />

      </div>


    </main>
    );
  }
}

export default content;


