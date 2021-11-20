import React from 'react';
import {Text, View,ScrollView} from 'react-native';
import styles from '../../styles/ChatStyles';
import Store from '../../Store/Store';

const ChatMessages = ({messages,id}) => {

  messages=messages.filter(mes=>mes.rid==id || mes.sid==id)
  return (
    <ScrollView>
      {messages.map(res => (
        <View
        key={res.time}
          style={
            res.sid === Store.id
              ? styles.myChatMessageContainer
              : styles.ChatMessageContainer
          }>
          <Text style={styles.ChatMessage}>{res.message}</Text>
          <Text style={styles.time}>{res.time}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ChatMessages;
