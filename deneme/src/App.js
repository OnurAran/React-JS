import React, { Component } from 'react';
import Navbar_lower from "./Components/navbarCompenent_lower";
import Navbar_upper from "./Components/navbarCompenent_upper";
import "./App.css"
import LeftBar from './Components/leftBar';
import RightBar from './Components/rightBar';
import Content from './Components/content';
import Container from './Components/container';


class App extends Component {
  render() {
    return (
      <Container>
        <LeftBar />
        <div className="display">
          <Content />
          <Content />
          <Content />
          <Content />
        </div>
        <RightBar />


        <Navbar_lower />
        <Navbar_upper />




      </Container>
    );

  }
}



export default App;