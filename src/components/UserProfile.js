import React, {Component} from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import HeaderUserProfile from './HeaderUserProfile';
import GridListExampleSimple from './GridListExampleSimple';
import TabsExampleControlled from './TabsExampleControlled';
import TextFieldProfile from './TextFieldProfile';

class UserProfile extends Component {

  render() {
    return (
      <div>

        <div>
            <HeaderUserProfile/>
        </div>

        <TabsExampleControlled/>
        
        <div>
            <GridListExampleSimple/>
            <GridListExampleSimple/>
        </div>
    
        <TextFieldProfile/>
		
   	  </div>
    );
  }
}

export default UserProfile;
