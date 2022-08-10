import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { useTheme } from '@app/hooks';

const WelcomeScreen: React.FC = () => {
  const { toggleTheme } = useTheme();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button icon="camera" mode="contained" onPress={toggleTheme}>
        <Text>Press me</Text>
      </Button>
    </View>
  );
};

export default WelcomeScreen;
