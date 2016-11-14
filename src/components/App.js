import React, {Component} from 'react';
import PaperBackground from './PaperBackground';
import '../css/App.css';

class App extends Component {

  render() {
    return (  
      <div>

        <div>
          <video style={{background: 'red'}} autoplay loop>
            <source src="../video/teaser.webm" type="video/webm"/>
            <source src="../video/teaser.mp4" type="video/mp4"/>
          </video>
        </div>

        <h2 className="categorias">Categorias</h2>
        
        <PaperBackground/>
        
      </div>
    );
  }
}

export default App;
