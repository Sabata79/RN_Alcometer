import React from 'react';
import { View, Text } from 'react-native';
import NumericInput from 'react-native-numeric-input';
import styles from '../styles/styles';

export default function NumericInputs({ onBottlesChange, onTimeChange, theme }) {

  const options = ['Bottles', 'Hours'];

  const handleBottlesInputChange = (value) => {
    onBottlesChange(value);
  };

  const handleTimeInputChange = (value) => {
    onTimeChange(value);
  };

  return (
    <View>
      {options.map((option) => (
        <View key={option}>
          <Text style={[styles.label, { paddingLeft: 5 }, theme === 'dark' && { color: styles.darkThemeColor }]}>
            {option}: {option === 'Bottles' && <Text style={{ fontSize: 9 }}>(1pcs = 0.33 beer)</Text>}
          </Text>
          <View style={styles.numericBoxContainer}>
            <NumericInput
              minValue={0}
              onChange={option === 'Bottles' ? handleBottlesInputChange : handleTimeInputChange}
              rightButtonBackgroundColor={styles.numericInputColor}
              leftButtonBackgroundColor={styles.numericInputColor}
              containerStyle={{ backgroundColor: styles.darkThemeColor }}
              borderColor={theme === 'dark' ? styles.darkThemeColor : styles.lightThemeColor}
              rounded
            />
          </View>
        </View>
      ))}
    </View>
  );
}