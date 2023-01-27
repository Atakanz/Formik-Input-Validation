import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import styles from './buttons.style';

const Buttons = ({name, task, testId}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity
        testID="login-button-title"
        style={styles.button}
        onPress={task}>
        <Text style={styles.text}>{name}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default Buttons;
