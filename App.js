import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import styles from './styles/styles';
import ThemeSwitch from './components/themeSwitch'
import NumericInputs from './components/bottlesTimeNumeric';
import Radiobuttons from './components/genreRadioButtons';
import InfoContainer from './components/infoContainer';

export default function App() {
  const [theme, setTheme] = useState('light');
  const [weight, setWeight] = useState('');
  const [genre, setGenre] = useState('Male');
  const [time, setTime] = useState('');
  const [bottles, setBottles] = useState('');
  const [result, setResult] = useState(null);
  const [ok, setOk] = useState(false);

  const handleThemeToggle = (isDarkTheme) => {
    setTheme(isDarkTheme ? 'dark' : 'light');
  };

  const getThemeStyle = () => {
    if (theme === 'light') {
      return styles.container;
    } else if (theme === 'dark') {
      return [styles.container, styles.darkTheme.container];
    }
  };

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
    if (weight === '') {
      Alert.alert(
        'You must enter your weight!',
        'Please provide your weight before calculating.',
        [
          {
            text: 'OK',
            onPress: () => setOk(true),
          },
        ]
      );
      return;
    }

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;
    let answer = 0;

    if (genre === 'Male') {
      answer = gramsLeft / (weight * 0.7);
    }
    if (genre === 'Female') {
      answer = gramsLeft / (weight * 0.6);
    }

    if (isNaN(answer) || !isFinite(answer) || answer < 0) {
      setResult(0);
    } else {
      setResult(answer);
    }
  }

  return (
    <View style={[styles.container, getThemeStyle()]}>
      <ThemeSwitch theme={theme} onToggle={handleThemeToggle} />
      <ScrollView>
        <View>
          <Text style={[styles.header, theme === 'dark' && { color: styles.darkThemeColor }]}>Alcometer</Text>
        </View>
        <Text style={[styles.label, theme === 'dark' && { color: styles.darkThemeColor }]}>Weight :</Text>
        <TextInput
          style={styles.input}
          onChangeText={(value) => setWeight(value)}
          placeholder="Write here your weight"
          keyboardType="numeric"
        />
        <View style={styles.contentContainer}>
          <View style={styles.numericInputsContainer}>
            <NumericInputs
              onBottlesChange={handleBottlesInputChange}
              onTimeChange={handleTimeInputChange}
              theme={theme}
            />
          </View>
          <InfoContainer result={result} />
        </View>
        <Radiobuttons selectedValue={genre} onRadioButtonChange={handleRadioButtonChange} theme={theme} />
        {result !== null && (
          <View>
            <Text
              style={[
                styles.result,
                result !== null && result < 0.2 && { color: styles.GoodToGo },
                result !== null && result >= 0.2 && result <= 0.5 && { color: styles.ThinkTwice },
                result !== null && result > 0.5 && { color: styles.DoNotEvenThink },
              ]}
            >
              {result.toFixed(2)} Per mille
            </Text>
          </View>
        )}
        <View>
          <TouchableOpacity onPress={() => countResult()}>
            <Text style={[styles.calculatebutton, theme === 'dark' && { borderColor: styles.darkThemeColor }]}>
              Calculate
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}