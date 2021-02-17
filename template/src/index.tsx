import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import store from './store';
import StartScreen from './screens/Start/StartScreen';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StartScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
