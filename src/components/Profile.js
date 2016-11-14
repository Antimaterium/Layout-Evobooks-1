import React, {Component} from 'react';
import HeaderUserProfile from './HeaderUserProfile';
import TextFieldProfile from './TextFieldProfile';



class Profile extends Component {

  render() {
    return (
      <div>

      <div>
      	<HeaderUserProfile/>
   	  </div>
		
			<TextFieldProfile/>
		
   	  </div>
    );
  }
}

export default Profile;
