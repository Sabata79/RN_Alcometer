import React, { useState } from 'react';
import { Switch, View, Text } from 'react-native';
import styles from '../styles/styles';

export default function ThemeSwitch({ onToggle }) {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => {
        setIsEnabled((previousState) => !previousState);
        onToggle(!isEnabled);
    }

    return (
        <View style={styles.switchButton}>
            <Switch onValueChange={toggleSwitch}
                value={isEnabled}
                thumbColor={isEnabled ? '#ffffff' : '#000000'}
                trackColor={{ false: '#726e6e', true: '#726e6e' }}
            />
            {isEnabled ?
                <Text style={{ color: 'white' }}>Switch to Light</Text> :
                <Text>Switch to Dark</Text>
            }
        </View>
    );
}