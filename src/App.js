import React from 'react';
import { StyleSheet, View } from 'react-native';
import Counter from './components/Counter';

const App = () => {
  return (
    <View style={styles.container}>
      <Counter initialValue={0} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ADD8E6',
  },
});

export default App;