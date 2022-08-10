import React from 'react';
import { View } from 'react-native';
import { ImgWelcome } from '@app/assets/images';

const Welcome: React.FC = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ImgWelcome />
    </View>
  );
};

export default Welcome;
