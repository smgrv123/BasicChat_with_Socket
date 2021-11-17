import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import styles from '../../styles/ChatStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/core';

const LeftComponent = () => {
  const navigation = useNavigation();

  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          type="font-awesome"
          name="chevron-left"
          color="#000"
          size={hp('2%')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LeftComponent;
