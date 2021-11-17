import React from 'react';
import {Text, View} from 'react-native';
import {Icon} from 'react-native-elements';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const ListObj = ({item, type, name}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: hp('.8%')}}>
      <Icon type={type} name={name} color="grey" size={20} />
      <Text style={{fontSize: hp('2%')}}>{`  ${item}`}</Text>
    </View>
  );
};

export default ListObj;
