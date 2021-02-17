import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const HelloApp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{texts.welcome}</Text>
    </View>
  );
};

const texts = {
  welcome: 'Welcome to HelloWorld App!',
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default HelloApp;
