import { StyleSheet } from "react-native";


 const styles = StyleSheet.create({
    centering: {
        alignSelf: 'center'
    },
    matter: {
        fontSize: 23,
        color: '#2B2A2A'
    },
    body: {
        backgroundColor: 'white'
    },
    card: {
        backgroundColor: '#fff',
        elevation: 10,
        borderRadius: 22,
        padding: 10,
        marginHorizontal: 10,
        marginVertical: 20
    },
    cardContent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInImages: {
        fontFamily: 'Sen',
        fontSize: 18,
        fontWeight: 'bold'
    },
    starting: {
        flexDirection: 'row',
        margin: 20
    },
    categorieImages: {
        flexDirection: "row",
        margin: 10,
        gap: 20
    },
    image: {
        width: 300,
        height: 200
    },
    img: {
        borderRadius: 10,
        height: 104,
        width: 122
    },
    start: {
        fontWeight: 'bold'
    },
    categories: {
        fontSize: 20,
        padding: 10
    },
    sideHeading: {
        fontSize: 30
    },
    text: {
        width: '90%',
        fontSize: 20,
        height: 50,
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 1,
        alignSelf: 'center',
        borderRadius: 14,
        flexDirection: 'row',
        margin: 10
    }
})

export default styles;