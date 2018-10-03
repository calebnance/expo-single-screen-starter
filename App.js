import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>welcome!</Text>
        <Text style={styles.text}>
          this is a simple one page react native app
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#1d2d3a',
    flex: 1,
    justifyContent: 'center'
  },
  text: {
    color: '#fff'
  }
});
