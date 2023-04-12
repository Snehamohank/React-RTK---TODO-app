
import React from 'react';
import { StyleSheet } from 'react-native';
import Homescreen from './src/Screen/Homescreen';
import { Provider } from 'react-redux';
import store from './src/Store';




const App = () => {
  return (
    <Provider store={store}>
      <Homescreen />
    </Provider>
  );
};

const styles = StyleSheet.create({

});

export default App;
