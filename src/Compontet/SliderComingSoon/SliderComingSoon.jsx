import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';
import FooterLinks from '../FooterLinks/FooterLinks';
import CountTo from 'react-count-to';

class SliderComingSoon extends Component {
  render() {
    return (
      <div className="SliderComingSoon">

  <div className="SliderComeing">
  <img src={require('../../img/ComeingSoon.jpg')}/>
  </div>
  <div className="SliderComingHolder">
  <h1>Coming Soon</h1>
  <p>New store we be launched in</p>
  <div>

  <ul className="SliderComingCounter">

  <li><h2><CountTo to={7} speed={5000} /></h2> <p1>Days</p1></li>
  <li><h2><CountTo to={88} speed={5000} /></h2><p1>Hours</p1></li>
  <li><h2><CountTo to={21} speed={5000} /></h2><p1>Min</p1></li>
  <li><h2><CountTo to={50} speed={5000} /></h2><p1>Sec</p1></li>

  </ul>
  </div>

  <div className="SLiderSocial">
  <h3>Follw Us:</h3>
  <ul class="social-mediaCounter">
                     <li><a href="#" class="fa fa-twitter"></a></li>
                     <li><a href="#" class="fa fa-facebook"></a></li>
                     <li><a href="#" class="fa fa-youtube"></a></li>
                     </ul>
                     </div>
  </div>
 
 
      </div>
    );
  }
}

export default SliderComingSoon;