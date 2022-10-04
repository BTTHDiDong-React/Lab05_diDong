import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {

    },
    flex_1:{
        flex:1,
    },
    flex_2:{
        flex:2,
    },
    flex_3:{
        flex:3,
    },
    row: {
        flexDirection: 'row',
    },
    column: {
        flexDirection: 'column',
    },
    view_center: {
        justifyContent:"center",
        alignItems: "center"
        
    },

    // ===============================
    containerHeader: {
        backgroundColor:'#1BA9FF',
        padding: 10,

    },
    containerCenter: {
        backgroundColor:'#E5E5E5',
    },
    containerfooter: {
        backgroundColor:'#1BA9FF',
        padding: 10,
    },


    imgItem: {
        width: 75,
        height: 75,
        // marginTop: 20
        margin:5
    },
    txtName: {
        paddingTop: 2,
    },
    txtShop: {
        color: '#f00',
    },
    btnClick: {
        
    }
});



///         style={[{ }]}                          //