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
import ChatMessages from '../../components/Chat/ChatMessages';

const Chat = ({route}) => {
  const {name, userId} = route.params;

  const [chat, setChat] = useState({message: '', sid: '', time: '', rid: ''});
  const [messages, setMessages] = useState(Store.messages);

  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://192.168.1.29:3000');
    socketRef.current.on('message', ({sid, message, time, rid}) => {
      setMessages([...messages, {message, sid, time, rid}]);
    });
    Store.setMessages(messages);
    return () => {
      socketRef.current.disconnect();
    };
  }, [messages]);

  const onSubmitHandler = () => {
    const {message, sid, time, rid} = chat;
    console.log(message, sid, time, rid);
    socketRef.current.emit('message', {message, sid, time, rid});
    setChat({message: '', sid: '', time: '', rid: ''});
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{flex: 2}}>
        <Header
          placement="left"
          leftComponent={<LeftComponent />}
          centerComponent={<CenterComponent name={name} />}
          rightComponent={{icon: 'settings', color: '#000'}}
          containerStyle={{
            backgroundColor: 'lightgrey',
            elevation: 10,
          }}
        />
      </View>
      <View style={{flex: 10, marginTop: '20%'}}>
        <ChatMessages messages={messages} id={userId}/>
      </View>
      <View style={{flex: 1.5}}>
        <Input
          value={chat.message}
          onChangeText={text =>
            setChat({
              message: text,
              sid: Store.id,
              time: moment().format('hh:mm A'),
              rid: userId,
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
