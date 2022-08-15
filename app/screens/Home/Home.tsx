import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const HomeScreen: React.FC = () => {
  const signOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  };

  const test = async () => {
    await firestore()
      .collection('workout')
      .add({
        title: 'test',
        property: true,
      })
      .then(() => Alert.alert('Test', 'Success on send data'))
      .catch(console.error);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={signOut}>
        <Text>Sign Out</Text>
      </Button>
      <Button onPress={test}>
        <Text>Test firestore</Text>
      </Button>
    </View>
  );
};

export default HomeScreen;
