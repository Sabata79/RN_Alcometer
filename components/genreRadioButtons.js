import React from 'react';
import { View, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from '../styles/styles';

export default function Radiobuttons({ selectedValue, onRadioButtonChange ,theme}) {
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
            <RadioButton value={option}
              color={theme === 'dark' ? styles.darkThemeColor : undefined}
              uncheckedColor={theme === 'dark' ? styles.darkThemeColor : undefined}
            />
            <Text style={[styles.label, theme === 'dark' && { color: styles.darkThemeColor }]}>{option}</Text>
          </View>
        ))}
      </RadioButton.Group>
    </View>
  );
}