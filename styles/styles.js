import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    numericInputColor: "orange",
    darkThemeColor: "#ffffff",
    lightThemeColor: "#000000",

    //Result Colors:
    GoodToGo: 'green',
    ThinkTwice: 'yellow',
    DoNotEvenThink: 'red',

    container: {
        paddingTop: StatusBar.currentHeight + 5,
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    switchButton: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        padding: 10,
        fontSize: 26,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'black',
        fontFamily: 'Roboto'
    },
    label: {
        padding: 10,
        fontWeight: 'bold',
        fontFamily: 'Roboto'
    },
    input: {
        backgroundColor: 'lightgrey',
        width: 340,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 5,
        fontFamily: 'Roboto'
    },
    numericBoxContainer: {
        padding: 10,
    },
    radioButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    result: {
        fontSize: 30,
        padding: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#000000',
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
        paddingHorizontal: 10,
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
        backgroundColor: 'lightgrey',
        borderRadius: 5,
        margin: 5,
        padding: 5,

    },
    goodToGo: {
        backgroundColor: 'lightgreen',
        textAlign: 'center',
        margin: 5,
        padding: 5,
        fontSize: 11,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'green',      
    },
    thinkTwice: {
        backgroundColor: 'lightyellow',
        textAlign: 'center',
        margin: 5,
        padding: 5,
        fontSize: 11,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'yellow',      
    },
    doNotEvenThink: {
        backgroundColor: 'lightcoral',
        textAlign: 'center',
        margin: 5,
        padding: 5,
        fontSize: 11,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: 'red',      
    },
    darkTheme: {
        container: {
            backgroundColor: '#000000',
            color: '#ffffff',
        },
    },
});

export default styles;