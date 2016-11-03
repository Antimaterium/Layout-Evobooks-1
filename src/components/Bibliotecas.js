import React, {Component} from 'react';
import HeaderUserProfile from './HeaderUserProfile';
import GridListExampleSimple from './GridListExampleSimple';
import TabsExampleControlled from './TabsExampleControlled';
import ModalLogin from './ModalLogin';

class Bibliotecas extends Component {

  render() {
    return (
      <div>
      <div>
      	<HeaderUserProfile/>
   	  </div>
   	 	<TabsExampleControlled/>
   	  <div>
			<ModalLogin/>
   	  <GridListExampleSimple/>
   	  <GridListExampleSimple/>
   	
   	  </div>
		
			
		
   	  </div>
    );
  }
}

export default Bibliotecas;
