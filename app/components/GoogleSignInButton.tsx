import React from 'react';
import { GoogleSigninButton as GoogleButton } from '@react-native-google-signin/google-signin';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { signInWithGoogleAsync } from '@app/services/signin';
import { useTheme } from '@app/hooks';

interface Props {
  onSuccess?(user: FirebaseAuthTypes.UserCredential): void;
  onError?(err: any): void;
}

export const GoogleSigninButton: React.FC<Props> = ({ onSuccess, onError }) => {
  const { isThemeDark } = useTheme();

  const onPress = () => signInWithGoogleAsync().then(onSuccess).catch(onError);

  return (
    <GoogleButton
      color={isThemeDark ? GoogleButton.Color.Dark : GoogleButton.Color.Light}
      size={GoogleButton.Size.Wide}
      onPress={onPress}
    />
  );
};
