import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/gateway/placement/launch/1917/EVREF_OCT20_GWBleedingHero_FT_XSite_1500X600_PV_en-GB._CB419087828_.jpg"
        alt="Banner"
        className="home_image"
      />
      <div className="home_row">
        <Product
          id="1234"
          title="Lorem ipsum: or lipsum as it is sometimes known, is dummy text used 
      in laying out print, graphic or web designs."
          price={101.96}
          rating={5}
          image="https://images.macrumors.com/article-new/2019/09/iphone11prolineup-800x778.jpg"
        />
        <Product
          id="1235"
          title="Lorem ipsum: or lipsum as it is sometimes known, is dummy text used 
      in laying out print, graphic or web designs."
          price={15.96}
          rating={5}
          image="https://res.cloudinary.com/singer-sewing/image/upload/v1573724176/Singer-Website-Library/products/Singer_4452_Heavy_duty_sewing_Machine_myqh0o.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1236"
          title="Lorem ipsum: or lipsum as it is sometimes known, is dummy text used 
      in laying out print, graphic or web designs."
          price={11.96}
          rating={5}
          image="https://www.lg.com/in/images/washing-machines/md07515048/gallery/FHM1207ZDL-Washing-Machines-Front-View-D-01.jpg"
        />
        <Product
          id="1237"
          title="Lorem ipsum: or lipsum as it is sometimes known, is dummy text used 
      in laying out print, graphic or web designs."
          price={141.96}
          rating={5}
          image="https://sc01.alicdn.com/kf/HTB1zLE8XsfrK1RkSmLyq6xGApXae.jpg"
        />
        <Product
          id="1238"
          title="Lorem ipsum: or lipsum as it is sometimes known, is dummy text used 
      in laying out print, graphic or web designs."
          price={113.96}
          rating={5}
          image="https://www.tonyson.ng/6325-home_default/wall-clock.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1239"
          title="Lorem ipsum: or lipsum as it is sometimes known, is dummy text used 
      in laying out print, graphic or web designs."
          price={12.96}
          rating={5}
          image="https://www.denofgeek.com/wp-content/uploads/2016/03/main_2.jpg?fit=620%2C396"
        />
      </div>
    </div>
  );
};

export default Home;
