import React from 'react';
import { View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import styles from '../styles/styles';

export default function NumericInputs({ onBottlesChange, onTimeChange }) {
  const handleBottlesInputChange = (value) => {
    onBottlesChange(value);
  };

  const handleTimeInputChange = (value) => {
    onTimeChange(value);
  };

  return (
    <View>
      <Text style={styles.label}>
        Bottles
      </Text>
      <View style={styles.numericBoxContainer}>
        <NumericInput
          minValue={0}
          onChange={handleBottlesInputChange}
          rightButtonBackgroundColor={styles.numericInputColor}
          leftButtonBackgroundColor={styles.numericInputColor}
          rounded
        />
      </View>
      <Text style={styles.label}>
        Hours
      </Text>
      <View style={styles.numericBoxContainer}>
        <NumericInput
          minValue={0}
          onChange={handleTimeInputChange}
          rightButtonBackgroundColor={styles.numericInputColor}
          leftButtonBackgroundColor={styles.numericInputColor}
          rounded
        />
      </View>
    </View>
  );
}