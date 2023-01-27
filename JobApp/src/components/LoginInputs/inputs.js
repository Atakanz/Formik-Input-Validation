import React from 'react';
import {TextInput} from 'react-native';
import styles from './inputs.style';

const TextInputs = props => {
  return (
    <TextInput
      style={styles.formUnit}
      label={props.labelName}
      onFocus={props.focusTask}
      placeholder={props.holder}
      onChangeText={props.task}
      secureTextEntry={props.security}
      placeholderTextColor="#212121"
    />
  );
};

export default TextInputs;
