import React, {useState, useEffect, useRef} from 'react';
import {KeyboardAvoidingView, Text, TextInput, View} from 'react-native';
import {Input} from 'react-native-elements';
import {Header} from 'react-native-elements/dist/header/Header';
import CenterComponent from '../../components/Chat/CentreComponent';
import io from 'socket.io-client';
import {Icon} from 'react-native-elements/dist/icons/Icon';
import styles from '../../styles/ChatStyles';
import Store from '../../Store/Store';
import moment from 'moment';
import LeftComponent from '../../components/Chat/LeftComponent';

const Chat = ({route}) => {
  const {name} = route.params;

  const [chat, setChat] = useState({message: '', id: '', time: ''});
  const [messages, setMessages] = useState([]);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://192.168.1.29:3000');
    socketRef.current.on('message', ({id, message, time}) => {
      setMessages([...messages, {message, id, time}]);
    });
    return () => {
      socketRef.current.disconnect();
    };
  }, [messages]);

  const onSubmitHandler = () => {
    const {message, id, time} = chat;
    console.log(message, id, time);
    socketRef.current.emit('message', {message, id, time});
    setChat({message: '', id: ''});
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{flex: 2, backgroundColor: 'red'}}>
        <Header
          placement="left"
          leftComponent={<LeftComponent />}
          centerComponent={<CenterComponent name={name} />}
          rightComponent={{icon: 'settings', color: '#000'}}
          containerStyle={{
            backgroundColor: 'lightgrey',
            elevation: 10,
            // height: hp('18%'),
          }}
        />
      </View>
      <View style={{flex: 10, marginTop: '20%'}}>
        {messages.map(res => (
          <View
            style={
              res.id === Store.id
                ? styles.myChatMessageContainer
                : styles.ChatMessageContainer
            }>
            <Text style={styles.ChatMessage}>{res.message}</Text>
            <Text style={styles.time}>{res.time}</Text>
          </View>
        ))}
      </View>
      <View style={{flex: 1.5}}>
        <Input
          value={chat.message}
          onChangeText={text =>
            setChat({
              message: text,
              id: Store.id,
              time: moment().format('hh:mm A'),
            })
          }
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
