import React, { useState, useEffect,useRef } from 'react';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Header} from 'react-native-elements/dist/header/Header';
import RightComponent from '../../components/Chat/RightComponent';
import io from 'socket.io-client';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import styles from '../../styles/ChatStyles';


const Chat = ({route}) => {
  const {name} = route.params;

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://192.168.1.29:3000')
    socketRef.current.on('message', (message) => {
      setMessages([...messages, message]);
    })
    return () => {
      socketRef.current.disconnect();
    }
  }, [messages]);

  const onSubmitHandler = () => {
    socketRef.current.emit('message', message);
    setMessage('');
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <Header
          placement="left"
          leftComponent={{
            icon: 'chevron-left',
            color: '#fff',
            iconStyle: styles.iconStyle,
          }}
          centerComponent={<RightComponent name={name} />}
          rightComponent={{icon: 'settings', color: '#000'}}
          containerStyle={{
            backgroundColor: 'lightgrey',
            elevation: 10,
            // height: hp('18%'),
          }}
        />
      </View>
      <View style={{flex: 10,marginTop:"20%"}} >
        {
          messages.map((message)=>(
            <Text>{message}</Text>
          ))
        }
      </View>
      <View style={{flex: 1.5}}>
        <Input
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Type a message"
          rightIcon={
            <Icon
              onPress={() => {
                onSubmitHandler();
              }}
              type="font-awesome"
              name="send"
              color="#00a680"
            />
          }
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Chat;
