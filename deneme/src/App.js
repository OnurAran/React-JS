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
        <LeftBar 
        
          title = ""
        
        
        />
        <div className="display">
          <Content 
          
          title = "Burasi baslik"
          date = "30.01.2022"
          username = "Kullaniciadi"
          contentoftitle = "Hamur için un, maya, şeker ve ılık suyu hamur toparlanan kadar yoğurun. Daha sonra"
          
          />
          <Content 
          
          title = "Yeni baslik"
          date = "30.01.2022"
          username = "rn.onurr"
          contentoftitle = "Gerekli malzemeleri topladıktan sonra, ocağın altını yakıyoruz tencereyi ocağa eklüyürüz"

          />
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