import React, { Component } from 'react';
import { Router, browserHistory, Route} from 'react-router';
// import logo from './logo.svg';
import './Studios.css';

const Page = ({ title }) => (
    <div className="App">
      <div className="App-header">
        <h2>{title}</h2>
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
      <div className="footer">
        <div>
          <div className="footer_icon">
            <img src="" alt="img"></img>
            <p>Privy</p>
          </div>
          <div className="footer_icon">
            <img src="" alt="img"></img>
            <p>Mind</p>
          </div>
          <div className="footer_icon">
            <img src="" alt="img"></img>
            <p>Body</p>
          </div>
          <div className="footer_icon">
            <img src="" alt="img"></img>
            <p>Breath</p>
          </div>
          <div className="footer_icon">
            <img src="" alt="img"></img>
            <p>More</p>
          </div>
        </div>
        <div className="bottom_bar"></div>
      </div>
      {/* <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About</Link>
      </p>
      <p>
        <Link to="/settings">Settings</Link>
      </p> */}
    </div>
);

const Studios = (props) => (
  <Page title="Studios"/>
);

const About = (props) => (
  <Page title="About"/>
);

const Settings = (props) => (
  <Page title="Settings"/>
);

class Studios extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Studios}/>
        <Route path="/about" component={About}/>
        <Route path="/settings" component={Settings}/>
      </Router>
    );
  }
}

export default Studios;