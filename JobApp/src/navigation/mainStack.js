import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginStack from './loginStack.js';
import {BottomTab} from './bottomTab.js';
import Settings from '../pages/settings/settings.js';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginStack" component={LoginStack} />
        <Stack.Screen name="BottomTab" component={BottomTab} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
