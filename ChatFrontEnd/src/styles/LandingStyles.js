import {StyleSheet} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen'

const styles = StyleSheet.create({
    container:{
        backgroundColor:"#fff",
        flex:1,
        height:hp("35%"),
    },
    listContainer:{
        backgroundColor:"#fff",
        margin: hp("1%"),
        elevation:8,
        borderRadius:hp('1%'),
        flexDirection:"row"
    },
    chatButton:{
        backgroundColor:"#FF007D",
        width: wp("45%"),
        justifyContent:"center",
        alignItems:"center",
        borderRadius:hp('0.5%'),
        marginLeft:wp("2.5%"),
    },
    ProfileImage:{
        width:wp("45%"),
        height:hp("35%"),
        alignSelf:"center",
        borderRadius:hp("1%"),
    },
    textContainer:{
        marginLeft:wp("5%"),
        marginTop:hp("1.5%"),
        flex:7
    },
    details:{
        color: 'grey',
        fontSize: hp("2%"),
        paddingBottom:hp("1%"),
        marginTop:hp("0.5%")
    },
    buttonText:{
        color:"#fff",
        fontSize:hp("2.5%"),
        padding: hp("1.25%")
    }
});

export default styles;
