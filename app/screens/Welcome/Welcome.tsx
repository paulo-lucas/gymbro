import React from 'react';
import { View } from 'react-native';
import { ImgWelcome } from '@app/assets/images';

const WelcomeScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImgWelcome width={50} />
    </View>
  );
};

export default WelcomeScreen;
