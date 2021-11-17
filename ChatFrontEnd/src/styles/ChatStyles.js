import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
  iconStyle: {color: '#000', marginTop: hp('0.5%')},
  RightContainer: {
    flexDirection: 'row',
    marginLeft: wp('5%'),
    justifyContent: 'center',
  },
  image: {
    width: hp('5%'),
    height: hp('5%'),
    borderRadius: hp('2.5%'),
  },
  name:{
    textAlign: 'center',
    marginLeft: hp('2.5%'),
    fontSize: hp('3.25%'),
    fontWeight: 'bold',
    color: '#000',
  }
});

export default styles;
