import React, { Component } from 'react';
import {NavItem,} from 'react-bootstrap';

class SliderErro extends Component {
  render() {
    return (
      <div className="SliderErroHolder">

 <div className="SliderErro">
  <img src={require('../../img/404.jpg')}/>
  </div>

  <div className="SliderErroHeader">
  <h2>Oops, page not found</h2>
  <p>It looks like nothing was found at this location. 
Perhaps searching can help or go back to Homepage</p>
<div id="custom-search-input">
        <div className="input-group col-md-12">
          <input type="text" className="  search-query form-control" placeholder="Search" />
          <span className="input-group-btn">
            <button className="btn btn-danger" type="button">
              <span className=" glyphicon glyphicon-search" />
            </button>
          </span>
        </div>
      </div>
  
  </div>
      </div>
    );
  }
}

export default SliderErro;