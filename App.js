import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles/styles';
import ThemeSwitch from './components/themeSwitch'
import NumericInputs from './components/bottlesTimeNumeric';
import Radiobuttons from './components/genreRadioButtons';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [weight, setWeight] = useState('');
  const [genre, setGenre] = useState('Male');
  const [time, setTime] = useState('');
  const [bottles, setBottles] = useState('');
  const [result, setResult] = useState(null);

  const handleThemeToggle = (isDarkTheme) => {
    setTheme(isDarkTheme ? 'dark' : 'light');
  };

  const getThemeStyle = () => {
    return theme === 'light' ? styles.container : styles.darkTheme.container;
  }

  const handleBottlesInputChange = (value) => {
    setBottles(value);
  };

  const handleTimeInputChange = (value) => {
    setTime(value);
  };

  const handleRadioButtonChange = (value) => {
    setGenre(value);
  };

  function countResult() {

    let litres = bottles * 0.33
    let grams = litres * 8 * 4.5
    let burning = weight / 10
    let gramsLeft = grams - (burning * time)
    let answer = 0

    if (genre === 'Male') {
      answer = gramsLeft / (weight * 0.7)
    }
    if (genre === 'Female') {
      answer = gramsLeft / (weight * 0.6)
    }
    if (isNaN(answer) || !isFinite(answer) || answer < 0) {
      setResult(0);
    } else {
      setResult(answer);
    }
  };

  return (
    <View style={[styles.container, getThemeStyle()]}>
      <ThemeSwitch theme={theme} onToggle={handleThemeToggle} />
      <ScrollView>
        <View>
          <Text style={styles.header}>Alcometer</Text>
        </View>
        <Text style={styles.label}>Weight</Text>
        <TextInput
          style={styles.input}
          onChangeText={value => setWeight(value)}
          placeholder="Write here your weight"
          keyboardType="numeric"
        />
        <NumericInputs
          onBottlesChange={handleBottlesInputChange}
          onTimeChange={handleTimeInputChange}
        />
        <Radiobuttons selectedValue={genre} onRadioButtonChange={handleRadioButtonChange} />
        <View>
          <TouchableOpacity onPress={() => countResult()}>
            <Text style={styles.calculatebutton}>Calculate</Text>
          </TouchableOpacity>
        </View>
        {result !== null && (
          <View>
            <Text style={styles.result}>{result.toFixed(2)} Per mille</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}