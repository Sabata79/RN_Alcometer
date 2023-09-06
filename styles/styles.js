import { StatusBar, StyleSheet } from "react-native";

const styles = StyleSheet.create({

    numericInputColor: "orange",
    darkThemeColor: "#ffffff",
    lightThemeColor :"#000000",

    container: {
        paddingTop: StatusBar.currentHeight + 5,
        flex: 1,
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    switchButton: {
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    header: {
        padding: 20,
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'black'
    },
    label: {
        padding: 10,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: 'lightgrey',
        width: 340,
        borderBottomColor: '#000000',
        borderBottomWidth: 2,
        paddingHorizontal: 10,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 5
    },
    numericBoxContainer: {
        padding: 10,
    },
    radioButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    result: {
        fontSize: 30,
        padding: 30,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: '#000000',
    },
    calculatebutton: {
        marginTop: 10,
        backgroundColor: 'orange',
        alignSelf: 'center',
        padding: 15,
        borderWidth: 2,
        borderRadius: 5,
    },
    darkTheme: {
        container: {
            backgroundColor: '#000000',
            color: '#ffffff'
        },
    },
});

export default styles;