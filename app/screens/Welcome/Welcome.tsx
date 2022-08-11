import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Dimensions,
} from 'react-native';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

import { useTheme } from '@app/hooks';
import { Logo, LogoWhite } from '@app/assets/vectors';
import { ImgWelcome } from '@app/assets/images';
import { GoogleSigninButton } from '@app/components';

const WelcomeScreen: React.FC = () => {
  const { isThemeDark } = useTheme();

  const onSuccess = (user: FirebaseAuthTypes.UserCredential) => {
    console.log(user);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Image source={isThemeDark ? LogoWhite : Logo} style={styles.logo} />
        <ImgWelcome width="80%" style={styles.image} />
        <GoogleSigninButton onSuccess={onSuccess} onError={console.log} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 40,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  logo: {
    width: '80%',
    resizeMode: 'contain',
  },
  image: {
    maxHeight: (Dimensions.get('window').width - 80) * 0.8,
  },
});

export default WelcomeScreen;
