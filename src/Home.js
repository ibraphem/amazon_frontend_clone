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
          title="Lorem ipsum: or lipsum as it is sometimes known."
          price={101.96}
          rating={5}
          image="https://images.macrumors.com/article-new/2019/09/iphone11prolineup-800x778.jpg"
        />
        <Product
          id="1235"
          title="Lorem ipsum: or lipsum as it is sometimes known."
          price={15.96}
          rating={5}
          image="https://www-konga-com-res.cloudinary.com/w_auto,f_auto,fl_lossy,dpr_auto,q_auto/media/catalog/product/L/a/Latex-Waist-Trainer---Black-7432840.jpg"
        />
      </div>
      <div className="home_row">
        <Product
          id="1236"
          title="Lorem ipsum: or lipsum as it is."
          price={11.96}
          rating={5}
          image="https://sc01.alicdn.com/kf/HTB1zLE8XsfrK1RkSmLyq6xGApXae.jpg"
        />
        <Product
          id="1237"
          title="Lorem ipsum: or lipsum as it is."
          price={141.96}
          rating={5}
          image="https://d3re0f381bckq9.cloudfront.net/41869737_img-20200225-wa0020_1080x1080.jpg"
        />
        <Product
          id="1238"
          title="Lorem ipsum: or lipsum as it is."
          price={113.96}
          rating={5}
          image="https://cdn.shopify.com/s/files/1/1185/9434/products/leather-swivel-chair-ug002-3747864936517.jpg?v=1587085368"
        />
      </div>
      <div className="home_row">
        <Product
          id="1239"
          title="Lorem ipsum: or lipsum as it is sometimes known, is dummy text used."
          price={12.96}
          rating={5}
          image="https://www.denofgeek.com/wp-content/uploads/2016/03/main_2.jpg?fit=620%2C396"
        />
      </div>
    </div>
  );
};

export default Home;
