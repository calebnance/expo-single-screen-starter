import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { colors, device } from './src/constants';

// screens
import Menu from './src/screens/Menu';

// components
import InfoBar from './src/components/InfoBar';
import Touch from './src/components/Touch';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      progress: 10,
      showLeftMenu: false,
      showRightMenu: false,
      statusBar: 'light-content',
      statusBarHidd: false,
      statusBarTrans: 'fade'
    };

    this.menuClose = this.menuClose.bind(this);
    this.menuOpen = this.menuOpen.bind(this);
  }

  menuClose() {
    this.setState({
      showLeftMenu: false,
      showRightMenu: false,
      statusBar: 'light-content',
      statusBarHidd: false
    });
  }

  menuOpen(showMenu) {
    this.setState(prevState => ({
      progress: prevState.progress + 10,
      showLeftMenu: showMenu === 'showLeftMenu',
      showRightMenu: showMenu === 'showRightMenu',
      statusBar: 'dark-content',
      statusBarHidd: true
    }));
  }

  renderMenus() {
    const { showLeftMenu, showRightMenu } = this.state;
    let menuScreen = null;

    if (showLeftMenu) {
      menuScreen = <Menu show={showLeftMenu} onClose={this.menuClose} />;
    } else if (showRightMenu) {
      menuScreen = (
        <Menu direction="right" show={showRightMenu} onClose={this.menuClose} />
      );
    }

    return menuScreen;
  }

  render() {
    const { progress, statusBar, statusBarHidd, statusBarTrans } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor={colors.blue}
          barStyle={statusBar}
          hidden={statusBarHidd}
          showHideTransition={statusBarTrans}
        />

        <InfoBar progress={progress} text="info bar" />

        <Text style={styles.text}>welcome!</Text>
        <Text style={styles.text}>
          this is a simple one page react native app
        </Text>

        <Touch
          style={[styles.block, styles.leftBlock]}
          testId="leftMenu"
          text="left menu"
          onPress={() => this.menuOpen('showLeftMenu')}
        />
        <Touch
          style={[styles.block, styles.rightBlock]}
          testId="rightMenu"
          text="right menu"
          onPress={() => this.menuOpen('showRightMenu')}
        />

        {this.renderMenus()}
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
  text: {
    color: colors.white
  },
  block: {
    alignItems: 'center',
    borderRadius: 4,
    bottom: device.iPhoneNotch ? 32 : 16,
    height: 64,
    padding: 4,
    position: 'absolute',
    justifyContent: 'center',
    width: 64
  },
  leftBlock: {
    backgroundColor: colors.blue,
    left: 16
  },
  rightBlock: {
    backgroundColor: colors.blue,
    right: 16
  }
});
