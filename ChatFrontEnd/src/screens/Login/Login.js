import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../styles/LoginStyles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input} from 'react-native-elements';
import Store from '../../Store/Store';

const Login = () => {
  const [userID, setuserID] = useState();

  const onSubmit = () => {
    let temp =[
      {
        id: 0,
        name: 'test2',
        age: 31,
        height: 6.0,
        country: 'India',
        education: 'Masters degree',
        job: 'Design Leader',
        status: 'unknown',
        state: 'Delhi',
      },
      {
        id: 1,
        name: 'test3',
        age: 31,
        height: 6.0,
        country: 'India',
        education: 'Masters degree',
        job: 'Design Leader',
        status: 'unknown',
        state: 'Delhi',
      },
      {
        id: 2,
        name: 'test4',
        age: 31,
        height: 6.0,
        country: 'India',
        education: 'Masters degree',
        job: 'Design Leader',
        status: 'unknown',
        state: 'Delhi',
      },
      {
        id: 3,
        name: 'test5',
        age: 31,
        height: 6.0,
        country: 'India',
        education: 'Masters degree',
        job: 'Design Leader',
        status: 'unknown',
        state: 'Delhi',
      },
      {
        id: 4,
        name: 'test5',
        age: 31,
        height: 6.0,
        country: 'India',
        education: 'Masters degree',
        job: 'Design Leader',
        status: 'unknown',
        state: 'Delhi',
      },
      {
        id: 5,
        name: 'test6',
        age: 31,
        height: 6.0,
        country: 'India',
        education: 'Masters degree',
        job: 'Design Leader',
        status: 'unknown',
        state: 'Delhi',
      },
      {
        id: 6,
        name: 'test1',
        age: 31,
        height: 6.0,
        country: 'India',
        education: 'Masters degree',
        job: 'Design Leader',
        status: 'unknown',
        state: 'Delhi',
      },
    ];
    
    temp = temp.filter(item => item.id!==userID);
    console.log('temp', temp);
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
