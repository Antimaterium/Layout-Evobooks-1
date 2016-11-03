import React from 'react';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import ActionFavorite from 'material-ui/svg-icons/action/favorite';
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border';


const styles = {

  radioButton: {
    marginBottom: 16,
  },
};

const RadioOptionsForm = () => (
  <div>
    <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
      <RadioButton
        value="light"
        label="Tecnico"
        style={styles.radioButton}
      />

      <RadioButton
        value="light"
        label="Graduação"
        style={styles.radioButton}
      />

      <RadioButton
        value="light"
        label="Mestrado"
        style={styles.radioButton}
      />

      <RadioButton
        value="light"
        label="Doutorado"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);

export default RadioOptionsForm;