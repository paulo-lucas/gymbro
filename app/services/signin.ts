import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

import { WEB_CLIENT_ID } from '@env';

GoogleSignin.configure({
  webClientId: WEB_CLIENT_ID,
});

export const signInWithGoogleAsync = async () => {
  const { idToken } = await GoogleSignin.signIn();
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  return auth().signInWithCredential(googleCredential);
};
