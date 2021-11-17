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
  name: {
    textAlign: 'center',
    marginLeft: hp('2.5%'),
    fontSize: hp('3.25%'),
    fontWeight: 'bold',
    color: '#000',
  },
ChatMessage: {
    textAlign: 'left',
    color: '#000',
    fontSize: hp('2.5%'),
    marginLeft: wp('1%'),
  },
  myChatMessageContainer: {
    backgroundColor: '#EDEDED',
    width: wp('40%'),
    alignSelf: 'flex-end',
    marginRight: wp('2.5%'),
    borderRadius: hp('1.5%'),
    padding: hp('1%'),
    marginBottom: hp('1%'),
  },
  ChatMessageContainer: {
    backgroundColor: '#EDEDED',
    width: wp('40%'),
    alignSelf: 'flex-start',
    marginLeft: wp('2.5%'),
    borderRadius: hp('1.5%'),
    padding: hp('1%'),
    marginBottom: hp('1%'),
  },
  time: {
    fontSize: hp('1.5%'),
    textAlign: 'right',
  },
  chatContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginLeft: wp('2.5%'),
  },
});

export default styles;
