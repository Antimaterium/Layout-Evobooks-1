import React, { Component, PropTypes } from 'react';
import { List, ListItem  } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';

import ItemLista from './ItemLista';
import { request } from '../utils/Request';
import '../css/Lista.css';

class Lista extends Component {

	state = {
		objects: [],
		animations: []
	}

	componentDidMount() {
		this.listarCamadas()
	}

	listarCamadas() {
		var header = {
			"Authorization": "Bearer " + localStorage.getItem("token"),
		}
		// var data={
		// 	"":"",
		// }

		request("POST", "File/Objects?FileID=8cb47cd8-6ffd-4fe3-b813-2b7bdae87a4e", header)
			.then(response => response.json())
			.then(response => {
				this.setState({
					objects: response
				});
			});
	}

	render() {
		return (
			<div>
				<List>
					{ this.state.objects.map(object => {
						return <ListItem primaryText={object.Name}/>
						}) 
					}
				</List>	  
			</div>
		)
	}
}

Lista.propTypes = {	titulo: PropTypes.string.isRequired}


export default Lista;
