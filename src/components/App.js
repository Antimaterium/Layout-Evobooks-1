import React, {Component} from 'react';
import PaperBackground from './PaperBackground';
import '../css/App.css';
import Background from '../img/branco-opacity.png';

class App extends Component {

  render() {

    const styles = {
      video: {
        zIndex: '0', 
        minWidth: '100%', 
        minHeight: '100%',
      },
      boxVideo: {
        zIndex: '1',
        top: '-50px', 
        left: '0px', 
        width: '100%', 
        opacity: '1', 
        overflow: 'hidden', 
        height: '550px',
        borderBottom: 'solid #26C6DA'
      },
      container: {
        backgroundImage: 'url("http://1x1px.me/FFFFFF-0.4.png")',
        height: '551px',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '101%',
        zIndex: '10'
      }
    }

    return (  
      <div>
        <div style={styles.container}></div>
        <div style={styles.boxVideo}>
          <video style={styles.video} loop="loop" autoPlay="autoplay">
            <source src={require("../video/teaser.webm")}/>
          </video>
        </div>
      
        <h2 className="categorias">Categorias</h2>
        
        <PaperBackground/>
        
      </div>
    );
  }
}

export default App;
