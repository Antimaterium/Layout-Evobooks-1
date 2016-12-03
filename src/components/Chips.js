import React, { Component } from 'react';
import ChipInput from 'material-ui-chip-input';
import Chip from 'material-ui/Chip';
import '../css/Chips.css';

class ChipsInput extends Component{
	render(){
		return (
        <div className="container"> 

          <ChipInput  

            fullWidth
            chipRenderer={({ value, isFocused, isDisabled, handleClick, handleRequestDelete }, key) => (
              <Chip
                key={key}
                style={{ margin: '8px 8px 0 0', float: 'left', pointerEvents: isDisabled ? 'none' : undefined }}
                onTouchTap={handleClick}
                onRequestDelete={handleRequestDelete}
              >
                {value}
              </Chip>
            )}
            />
        </div>
		);
	}

}

export default ChipsInput;
