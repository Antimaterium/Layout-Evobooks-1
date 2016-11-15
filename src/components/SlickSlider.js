import React, {Component} from 'react';
import Slider from 'react-slick';

class SlickSlider extends Component {
  
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider ref='slider' {...settings}>
          <div><img src={'../img/dori.jpg'} /></div>
          <div><img src={'../img/dori.jpg'} /></div>
          <div><img src={'../img/dori.jpg'} /></div>
          <div><img src={'../img/dori.jpg'} /></div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;