import { View, Text } from 'react-native';
import styles from "../styles/styles";

export default function InfoContainer({ result }) {

    return (

        <View style={styles.infoContainer}>
            <Text style={[styles.goodToGo, result !== null && result < 0.2 && { opacity: 1.0 }]}>
                Green blood alcohol limit (0.0 - 0.2): The effects of alcohol are minimal at this stage.
            </Text>
            <Text style={[styles.thinkTwice, result !== null && result >= 0.2 && result <= 0.5 && { opacity: 1.0 }]}>
                Yellow blood alcohol limit (0.2 - 0.5): The effects of alcohol start to become more noticeable.
            </Text>
            <Text style={[styles.doNotEvenThink, result !== null && result > 0.5 && { opacity: 1.0 }]}>
                Red blood alcohol limit (over 0.5): The effects of alcohol are significant and the risk of accidents increases.
            </Text>
        </View>

    )
}
