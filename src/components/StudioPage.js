import React from 'react';

import './StudioPage.css';
import Footer from "./Footer";
const Studio = () => (
  <div className="studio">
    <div className="studio_img">
      <p>This is a placeholder of studio image carousel</p>
      <img src="" alt=""></img>
      <div className="btns_ver">
        <button className="btn_normal btn_circle btn_green"><span>F</span></button>
        <button className="btn_normal btn_circle btn_yellow"><span>D</span></button>
        <button className="btn_normal btn_circle btn_blue"><span>P</span></button>
        <button className="btn_normal btn_circle btn_pink"><span>*</span></button>
      </div>
      <button className="btn_normal btn_yellow btn_order"><span>Order Now</span></button>
    </div>
    <h2>TBD, Lane 5 Koregaon park</h2>
    <div className="contact">
      <div className="contact_info">
        <button className="btn_normal sm_info_pink"><span>V</span></button>
        <p><b>Pune, Maharastara</b></p>
      </div>
      <div className="contact_info">
        <button className="btn_normal sm_info_pink"><span>L</span></button>
        <p><b>770 9391 042</b></p>
      </div>
    </div>
    <div className="heart_image"><p>heart image</p></div>
  </div>
);

const StudioPage = () => (
  <div className="App">
    <div className="App-header">
      <h2>Studios</h2>
      <p className="App-intro">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standart dummy text ever
      </p>
    </div>
    <div className="studios">
      <div>
        <p><b>3 Studios</b></p>
      </div>
      <div>
        <img src="" alt="option"></img>
      </div>
    </div>
    <div className="buttons">
      <button className="btn_normal btn_purple btn_w_16"><span>Free Class</span></button>
      <button className="btn_normal btn_blue btn_w_8"><span>props</span></button>
      <button className="btn_normal btn_yellow btn_w_24"><span>Dhyyaanin Program</span></button>
      <button className="btn_normal btn_blue btn_w_24"><span>Dhyaanin Favorite</span></button>
    </div>
    <Studio />
    <Studio />
    <Studio />
    <Footer />
  </div>
);

export default StudioPage;