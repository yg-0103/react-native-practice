import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './components/Navigation/Navigation';

const App: () => React.ReactNode = () => {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
