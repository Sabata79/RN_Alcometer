import { StatusBar, StyleSheet } from "react-native";
// infoBoxBaseStyle
const commonStyle = {
    textAlign: 'center',
    margin: 5,
    padding: 5,
    fontSize: 11,
    borderWidth: 2,
    borderRadius: 5,
    opacity: 0.08 
};

const styles = StyleSheet.create({
    numericInputColor: "orange",
    darkThemeColor: "#ffffff",
    lightThemeColor: "#000000",

    // Result Colors:
    GoodToGo: 'green',
    ThinkTwice: 'yellow',
    DoNotEvenThink: 'red',

    container: {
        paddingTop: StatusBar.currentHeight + 5,
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        margin: 4,
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 10,
    },
    switchButton: {
        paddingLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#000000',
        fontFamily: 'Roboto',
        marginBottom: 20,
    },
    label: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
        paddingBottom: 5,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    input: {
        backgroundColor: 'lightgrey',
        width: '95%',
        fontSize: 20,
        padding: 5,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginBottom: 30,
        marginTop: 5,
        borderRadius: 5,
        fontFamily: 'Roboto'
    },
    numericBoxContainer: {
        padding: 5,
        marginBottom: 40,
        alignItems: 'flex-start'
    },
    radioButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingLeft: 5,
    },
    result: {
        fontSize: 26,
        padding: 10,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'Roboto',
    },
    calculatebutton: {
        marginTop: 10,
        backgroundColor: 'orange',
        alignSelf: 'center',
        padding: 15,
        borderWidth: 2,
        borderRadius: 5,
        fontFamily: 'Roboto',
    },
    contentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
        marginTop: 10,
    },
    numericInputsContainer: {
        flex: 1,
    },
    infoContainer: {
        flex: 1,
    },
    infoText: {
        textAlign: 'center',
        fontSize: 11,
        borderRadius: 5,
        margin: 5,
        padding: 5,
    },
    //infoBoxColors
    goodToGo: {
        ...commonStyle,
        backgroundColor: 'lightgreen',
        borderColor: 'green'
    },
    thinkTwice: {
        ...commonStyle,
        backgroundColor: 'lightyellow',
        borderColor: 'yellow'
    },
    doNotEvenThink: {
        ...commonStyle,
        backgroundColor: 'lightcoral',
        borderColor: 'red'
    },
    darkTheme: {
        container: {
            backgroundColor: '#000000',
            color: '#ffffff',
        },
    },
});

export default styles;