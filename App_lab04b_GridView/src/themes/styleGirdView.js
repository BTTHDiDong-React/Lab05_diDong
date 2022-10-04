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
    view_centerTop: {
        alignItems: "center"
        
    },

    // ===============================
    containerHeader: {
        backgroundColor:'#1BA9FF',
       padding: 5,

    },
    containerCenter: {
        backgroundColor:'#E5E5E5',
        height: 200,
    },
    containerfooter: {
        backgroundColor:'#1BA9FF',
        padding: 5,
        paddingHorizontal: 10,
    },

});



///         style={[{ }]}                          //