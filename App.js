import React from 'react';
import Navigation, { AuthNavigator, AppNavigator } from './src/navigator/Navigation';
import { NavigationContainer } from '@react-navigation/native';

const App = ()  => {
  return (
    <>
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
    </>
  );
};

export default App;