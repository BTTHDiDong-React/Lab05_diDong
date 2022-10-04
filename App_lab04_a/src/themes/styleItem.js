import { StyleSheet } from "react-native";

export default StyleSheet.create({
    view_center: {
        justifyContent: "center",
        alignItems: "center"

    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },


    ///
    imgItem: {
        width: 75,
        height: 75,
        // marginTop: 20
        margin: 5
    },
    txtName: {
        paddingTop: 5,
        // textTransform: 'uppercase',
    },
    txtShop: {
        color: '#f00',
        fontSize: 16,
    },
    btnClick: {

        padding: 10, 
        paddingHorizontal: 20,
        fontSize: 16, 
        color: "#fff", 
        backgroundColor: '#f00',
    }
})