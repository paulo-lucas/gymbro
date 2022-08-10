import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '@app/screens/Welcome';
import Home from '@app/screens/Home';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

export default Routes;
