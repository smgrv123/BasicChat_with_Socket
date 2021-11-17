import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/LoginStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input} from 'react-native-elements';
import Store from '../../Store/Store';

const Login = ({navigation}) => {
  const [userID, setuserID] = useState();

  const onSubmit = () => {
    console.log('userID',typeof(userID))
    let data =Store.data

    data = data.filter(item =>  item.id!=userID);
    Store.setId(userID);
    navigation.navigate('Landing',{data:data});
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={{flex: 3}}>
          <Text style={styles.heading}>And We Met</Text>
          <Text style={styles.head2}>Please Enter Your User ID</Text>
        </View>
        <View style={{flex: 5, justifyContent: 'center'}}>
          <Input
            placeholder="User ID"
            value={userID}
            onChangeText={text => setuserID(text)}
            keyboardType="numeric"
          />
        </View>
        <View style={{flex: 4, justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => {
              onSubmit();
            }}
            style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
