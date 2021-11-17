import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import List from '../../components/Landing/List'
import Store from '../../Store/Store';
import styles from '../../styles/LandingStyles';

const data = Store.data;

const Landing = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <List item={item} navigation={navigation} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Landing;
