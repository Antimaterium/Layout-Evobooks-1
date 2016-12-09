import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  button: {
    margin: 12,
  },
  exampleImageInput: {
    cursor: 'pointer',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    width: '100%',
    opacity: 0,
  },
};

class InputImage extends Component{

	render() {
		return (
			<div>
			   <RaisedButton
       				label="Selecione um Modelo "
      				labelPosition="before"
     				style={styles.button}
      				containerElement="label"
    >
      <input 
        type="file" 
        style={styles.exampleImageInput} 
        onChange={(e) => {
            this.setState({image: e.target.files[0]});
            this.props.onChange(e.target.files[0]);
          }
        } />
      </RaisedButton>
			</div>
			);
	}
}

export default InputImage;
