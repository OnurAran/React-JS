import React, { Component } from 'react';
import "./content.css"



class rightBar extends Component {
  render() {

    const {RightTitle,ContentRight} = this.props;
    
    return (
      <aside className="Right">
      <div className="Righticerik">
        
      <h5 className="sagtaraf">{RightTitle}</h5>
      <h6 className="sagicerik">{ContentRight}</h6>


      </div>
      </aside>
    );
  }
}

export default rightBar;
