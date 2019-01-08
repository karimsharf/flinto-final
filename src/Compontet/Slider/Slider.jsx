import React, { Component } from 'react';
// import Navbar from '../Navbar/Navbar';
import ScrollAnimation from 'react-animate-on-scroll';
import {Animated} from "react-animated-css";
import Sliderr from 'react-animated-slider';
// import 'react-animated-slider/build/horizontal.css';
import '../Slider/slider-animate.css';

import {Grid,Row,Col} from 'react-bootstrap';


const content = [
	{
		title: 'New Arrivals',
		description:
		'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. .',
		button: 'Discover',
		image: 'https://aikoparadaisu.com/media/magiccart/magicslider/cache/1920x765//s/l/slide2.jpg',
	
	},
	{
		title: 'New Arrivals',
			description:
		'Woman Collection & Man Collection.',
		button: 'Discover',
    image: 'https://aikoparadaisu.com/media/magiccart/magicslider/cache/1920x765//s/l/slide2.jpg',

	},
	{
		title: 'New Arrivals',
		description:
		'Woman Collection & Man Collection.',
		button: 'Buy now',
		image: 'https://aikoparadaisu.com/media/magiccart/magicslider/cache/1920x765//s/l/slide2.jpg',
	
	}
];


class Slider extends Component {

  render() {
    return (
      <div className="Sliderer">

      	<Sliderr className="slider-wrapper">
			{content.map((item, index) => (
				<div
					key={index}
					className="slider-content"
					style={{ background: `url('${item.image}') no-repeat center center` }}
				>
					<div className="inner">
						<h1>{item.title}</h1>
						<p>{item.description}</p>
						<button>{item.button}</button>
					</div>
					
				</div>
			))}
		</Sliderr>
        {/* <img src={require('../../img/slide2.jpg')}/> */}

{/* <div className="sliderholdall">
<Animated animationIn="fadeInLeft" animationOut="slideOutRight" isVisible={true}>

<h2>New Arrivals</h2>

</Animated>

<span><a href="#">Woman Collection</a></span><span className="sliderhold"> & </span><span><a href="#">Man Collection</a></span>
</div> */}

      </div>


    );
  }
}

export default Slider;