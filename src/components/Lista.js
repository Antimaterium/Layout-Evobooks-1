import React, { Component, PropTypes  } from 'react'; 
import {List} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import ItemLista from './ItemLista';
import '../css/Lista.css';

class Lista extends Component{

	

	listarCamadas(){
		
	var header = {
    "Authorization": "Bearer "+localStorage.getItem("token"),
	}

//	request("POST","Objects?FileID=39ef3e33-0939-43c5-abde-87db9773bff7", header, formData)
 //   .then(response => response.json())
 //   .then(response => {
 //      console.log(response)
//  })



	}


	render(){
		return (
  <List className="container">
        <Subheader>{this.props.titulo}</Subheader>
      			<ItemLista texto="Layer 1"/>
			 	<ItemLista texto="Layer 2"/>
				<ItemLista texto="Layer 3"/>
    </List>
		);
	}
}

Lista.propTypes = {
    titulo : PropTypes.string.isRequired	
}


export default Lista;
