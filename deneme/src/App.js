import React, { Component } from 'react';
import Navbar_lower from "./Components/navbarCompenent_lower";
import Navbar_upper from "./Components/navbarCompenent_upper";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar_lower/>
        <Navbar_upper/>
      </div>
    );
  }
}

export default App;