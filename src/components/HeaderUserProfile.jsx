import React, { Component } from 'react';
//import './Card.css';
import AvatarProfile from './AvatarProfile';
import '../css/Header.css';

class HeaderUserProfile extends Component {
	render() {
		return(
				<div className="Header">
					<div>
					<AvatarProfile/>
					</div>
					<h2> My Library  </h2>
					
				</div>
			);
	}
}
export default HeaderUserProfile;




