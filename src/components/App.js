import React, {Component} from 'react';
import PaperBackground from './PaperBackground';
import '../css/App.css';

class App extends Component {

  render() {

    const styles = {
      video: {
        zIndex: '1',
        width: '100%',
        MaxHeight: '500px'
      },
      boxVideo: {
        zIndex: '0',
        MaxHeight: '500px',
        background: 'red',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
      }
    }

    return (  
      <div>
        <div style={styles.boxVideo}>
          <video preload="auto" autoPlay="autoPlay" loop="loop" style={{width: '100%', display: 'block'}}>
            <source src={require("../video/teaser.mp4")} type="video/mp4"/>
          </video>
        </div>
        <h2 className="categorias">Categorias</h2>
        
        <PaperBackground/>
        
      </div>
    );
  }
}

export default App;
