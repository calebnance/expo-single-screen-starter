import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/api/constants';

// component(s)
import Touch from './src/components/Touch';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>welcome!</Text>
        <Text style={styles.text}>
          this is a simple one page react native app
        </Text>
        <Touch
          style={[styles.block, styles.leftBlock]}
          text="left"
          onPress={() => console.log('bottom left block')}
        />
        <Touch
          style={[styles.block, styles.rightBlock]}
          text="right"
          onPress={() => console.log('bottom right block')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.brandPrimary,
    flex: 1,
    justifyContent: 'center'
  },
  block: {
    alignItems: 'center',
    bottom: 16,
    height: 72,
    position: 'absolute',
    justifyContent: 'center',
    width: 72
  },
  leftBlock: {
    backgroundColor: colors.blue,
    left: 16
  },
  rightBlock: {
    backgroundColor: colors.brown,
    right: 16
  },
  text: {
    color: colors.white
  }
});
