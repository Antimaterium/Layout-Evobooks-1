import React, { Component } from 'react'; 

import '../css/Image.css';

class Image extends Component{
	render(){
		return (
          <div className="image"> 
			<img alt="Dori" src="../img/dori.jpg" /> 
		</div> 	
		);          
	}
}

export default Image;