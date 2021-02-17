import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './StartScreen';

const StartStack = createStackNavigator();

const StartScreens = () => (
  <StartStack.Navigator>
    <StartStack.Screen name={StartScreen.name} component={StartScreen} />
  </StartStack.Navigator>
);

export default StartScreens;
