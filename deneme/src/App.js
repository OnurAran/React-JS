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

          lefttitle="Musakka yemegi"


        />
        <div className="display">
          <Content

            title="Pizza"
            date="30.01.2022"
            username="Kullaniciadi"
            contentoftitle="Hamur için un, maya, şeker ve ılık suyu hamur toparlanan kadar yoğurun. Daha sonra"

          />
          <Content

            title="Yeni baslik"
            date="30.01.2022"
            username="rn.onurr"
            contentoftitle="Gerekli malzemeleri topladıktan sonra, ocağın altını yakıyoruz tencereyi ocağa eklüyürüz"

          />
          <Content />
          <Content />
        </div>
        <div className="RightApp">
          <RightBar

            RightTitle="Menemen Olayı"
            ContentRight="Menemen soğanlı mı soğansız mı olur tartışması kavga ile bitti. 3 ölü 2 yaralı."

          />

          <RightBar

            RightTitle="ReactJS ile hızlı web siteler"
            ContentRight="React kullanıcı arayüzü oluşturmaya yarayan açık kaynak kodlu bir javascript kütüphanesidir. Facebook önderliğinde bir geliştirici grubu tarafından geliştirilmekte olan React, Model-View-Controller prensibine uygun olarak oluşturulmuştur."

          />

          <RightBar

            RightTitle="Deneme"
            ContentRight="Deneme"

          />


        </div>



        <Navbar_lower />
        <Navbar_upper />




      </Container>
    );

  }
}



export default App;