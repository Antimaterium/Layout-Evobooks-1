
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
    margin: 12,
    width: 200,
    display:'block', 
    float:"right",
    marginRigth:500,
};

const AltBtn = () => (
    <div>
        <RaisedButton label="Alterar" style={style} />
        <br />
               
    </div>
);

export default AltBtn;