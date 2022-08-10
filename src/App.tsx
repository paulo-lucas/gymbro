import React from 'react';
import {View, Button} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import {WEB_CLIENT_ID} from '@env';

const App = () => {
  GoogleSignin.configure({
    webClientId: WEB_CLIENT_ID,
  });

  const signInWithGoogleAsync = async () => {
    const {idToken} = await GoogleSignin.signIn();
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    return auth()
      .signInWithCredential(googleCredential)
      .then(user => console.log(user));
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Sign with google" onPress={signInWithGoogleAsync} />
    </View>
  );
};

export default App;
