import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../styles/styles';

export default function Radiobuttons({ selectedValue, onRadioButtonChange }) {
  const options = ['Male', 'Female'];

  const handleRadioButtonChange = (value) => {
    onRadioButtonChange(value);
  };

  return (
    <View>
      <RadioButton.Group
        onValueChange={(value) => handleRadioButtonChange(value)}
        value={selectedValue}
      >
        {options.map((option) => (
          <View style={styles.radioButtons} key={option}>
            <RadioButton value={option} />
            <Text style={styles.label}>{option}</Text>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
}