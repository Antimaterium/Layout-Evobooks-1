import React, { Component, PropTypes } from 'react';
import Checkbox from 'material-ui/Checkbox';
import '../css/ItemLista.css';

class ItemLista extends Component{
	render() {
		return (
			    <Checkbox className="item" label={this.props.texto}    />
			);
	}
}

ItemLista.propTypes = {
    texto : PropTypes.string.isRequired	
}



export default ItemLista;