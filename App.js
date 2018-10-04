import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/api/constants';

// screens
import Menu from './src/screens/Menu';

// component(s)
import Touch from './src/components/Touch';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showLeftMenu: false,
      showRightMenu: false
    };

    this.menuOpen = this.menuOpen.bind(this);
    this.menuClose = this.menuClose.bind(this);
  }

  menuOpen(showMenu) {
    this.setState({
      showLeftMenu: showMenu === 'showLeftMenu',
      showRightMenu: showMenu === 'showRightMenu'
    });
  }

  menuClose() {
    this.setState({
      showLeftMenu: false,
      showRightMenu: false
    });
  }

  render() {
    const { showLeftMenu, showRightMenu } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>welcome!</Text>
        <Text style={styles.text}>
          this is a simple one page react native app
        </Text>

        <Touch
          style={[styles.block, styles.leftBlock]}
          text="left"
          onPress={() => this.menuOpen('showLeftMenu')}
        />
        <Touch
          style={[styles.block, styles.rightBlock]}
          text="right"
          onPress={() => this.menuOpen('showRightMenu')}
        />

        <Menu show={showLeftMenu} onClose={this.menuClose} />
        <Menu direction="right" show={showRightMenu} onClose={this.menuClose} />
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
