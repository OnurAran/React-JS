import React from 'react';
import "./content.css"
import resim from "./icon.png"
import yemek from "./yemek.jpg"

const content = () => {
  return (
    <main className="Main">


      <div className="compenent">
        <div className="inContent">
          <img src={resim} alt="Profile" className="resim" />
          <h6 className="textUser">@Kullanıcı adı</h6>
          <h2 className="text" >Burası Başlık</h2>
          <h6>27.01.2022</h6>

        </div>

        <h6 className="contents" >  Hamur için un, maya, şeker ve ılık suyu hamur toparlanan kadar yoğurun. Hamur toparlandıktan sonra tuzu ve zeytinyağını da ekleyip bir 5 dakika daha yoğurun. Hamuru hafifçe yalayıp üzerini örtün ve ılık bir yerde 1 saat kadar mayalayın.
          Hamuru 4 eşit parçaya bölün  ve elinizle yuvarlayın. Her bir parçayı Vestel Mikrodalga Fırın'ın tabanına göre açın.
          Hamuru yağlı kağıt üzerine yerleştirin, domates püresini sürün, kaşar peynirini yerleştirin, mısır, biber ve sucuk parçalarını da ekleyip Vestel Mikrodalga Fırın'ın kombi  2  (c-2) modunda 4 dakika pişirin.
          Dilerseniz hamuru açıp üzerine sadece domates sosu sürüp mikrodalga fırında tam güçte 2 dakika pişirdikten sonra oda sıcaklığında soğutup ardından streçleyip derin dondurucuda 2 ay saklayabilir ve dilediğiniz malzemeleri sonrasında üzerine ekleyip dilediğiniz zaman mikrodalga fırında pişirebilirsiniz.
          Bu tarifi hamur açmadan, malzemeleri bazlama üzerine koyarak da daha pratik olarak yapabilirsiniz. Afiyet olsun.
        </h6>

        <img src={yemek} alt="Profile2" className="Altresim" />

      </div>


    </main>
  );
};

export default content;
