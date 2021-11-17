import { StyleSheet } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#FF007D",
        flex:1,
        justifyContent:"center",
    },
    loginContainer:{
        height: hp("60%"),
        backgroundColor:"#FFF"
    },
    heading:{
        fontSize:wp("10%"),
        fontWeight:"bold",
        textAlign:"center",
        paddingTop:hp("2.5%"),
    },
    head2:{
        fontSize:wp("5%"),
        textAlign:"center",
        paddingTop:hp("1.5%"),
    },
    button:{
        backgroundColor:"#FF007D",
        // height: hp("6%"),
        width: wp("80%"),
        borderRadius:wp("1.5%"),
        justifyContent:"center",
        alignItems:"center",
        alignSelf:"center",
    },
    buttonText:{
        color:"#FFF",
        fontSize:hp("3.5%"),
        padding: hp("1%"),
    }
})

export default styles;