import React from 'react';
import Paper from 'material-ui/Paper';
import TabsCategorias from './TabsCategorias'

const style = {
  height: '100%',
  width: '97%',
  margin: '1%',
  textAlign: 'center',
  display: 'inline-block',
  backgroundColor: '#FAFAFA',
};

const PaperBackground = () => (
    <div>
      <Paper 
        style={style} 
        zDepth={2} 
        children={
          <div>
            <TabsCategorias/>
          </div>
        }
      />
    </div>
);

export default PaperBackground ;
