import React from "react";
import "./Home.css";
import logo2 from "./image/achref2.png";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={logo2} alt="" />
        <div className="home__row">
          <Product
            id="123213341"
            title="the lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81vvgZqCskL.jpg"
            rating={5}
          />
          <Product
            id="49538094"
            title="playstation 4 is new collection in 2021"
            price={400.3}
            image="https://media.ldlc.com/r1600/ld/products/00/03/83/35/LD0003833580_2.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="
            Amazon
            FIFA 21 (PS4) - Version PS5 incluse: Amazon.fr: Jeux vidéo"
            price={20}
            image="https://images-na.ssl-images-amazon.com/images/I/61fvJa21xmL._AC_SX385_.jpg"
            rating={3}
          />
          <Product
            id="90829332"
            title="
            Amazon.ca
            Xbox One S 1TB All-Digital Edition Console (Discontinued)"
            price={450}
            image="https://images-na.ssl-images-amazon.com/images/I/61p7mgi0GAL._AC_SL1200_.jpg"
            rating={4}
          />
          <Product
            id="3254354345"
            title="Apple iPad Pro (2020) 12,9 pouces 128 Go Wi-Fi Gris sidéral"
            price={700.3}
            image="https://image.coolblue.be/max/500x500/products/1404258"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3254354345"
            title="
            Krëfel
            TV Neo QLED 4K QE55QN85A (2021) - 55 pouces"
            price={900}
            image="https://media.krefel.be/sys-master/products/9003882840094/570x450.31002160_1.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
