import React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device } from '../api/constants';

// component(s)
import Touch from '../components/Touch';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    let positionStart = -device.width;
    if (props.direction === 'right') {
      positionStart = device.width;
    }

    this.state = {
      backgroundColor: new Animated.Value(0),
      position: new Animated.Value(positionStart),
      positionStart
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    // console.log('Menu::componentDidMount()');
    const { backgroundColor, position } = this.state;

    Animated.timing(backgroundColor, {
      delay: 200,
      duration: 400,
      toValue: 10
    }).start();

    Animated.timing(position, {
      toValue: 0,
      duration: 400
    }).start();
  }

  // componentWillUnmount() {
  // console.log('Menu::componentWillUnmount()');
  // }

  handleClose() {
    const { onClose } = this.props;
    const { backgroundColor, position, positionStart } = this.state;

    Animated.timing(backgroundColor, {
      toValue: 0,
      duration: 400
    }).start();

    Animated.timing(position, {
      toValue: positionStart,
      duration: 400
    }).start(() => {
      onClose();
    });
  }

  renderLayout() {
    const { direction } = this.props;
    const { backgroundColor } = this.state;

    let render = '';
    const color = backgroundColor.interpolate({
      inputRange: [0, 10],
      outputRange: [colors.white0, colors.white20]
    });

    if (direction === 'left') {
      render = (
        <Animated.View
          style={{
            backgroundColor: color,
            alignItems: 'stretch',
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            height: '100%',
            width: '100%'
          }}
        >
          <ScrollView
            style={{
              backgroundColor: colors.brandPrimary,
              height: '100%',
              paddingTop: device.iPhoneX ? 44 : 0,
              width: '80%'
            }}
          >
            <View
              style={{
                backgroundColor: colors.white,
                height: 75,
                marginBottom: 20,
                width: '100%'
              }}
            />
            <View
              style={{
                backgroundColor: colors.white,
                height: 75,
                marginBottom: 20,
                width: '100%'
              }}
            />
            <View
              style={{
                backgroundColor: colors.white,
                height: 75,
                marginBottom: 20,
                width: '100%'
              }}
            />
            <View
              style={{
                backgroundColor: colors.white,
                height: 75,
                marginBottom: 20,
                width: '100%'
              }}
            />
          </ScrollView>
          <Touch
            onPress={() => this.handleClose()}
            style={{
              height: '100%',
              width: '20%'
            }}
          />
        </Animated.View>
      );
    } else if (direction === 'right') {
      render = (
        <View
          style={{
            backgroundColor: colors.white50,
            flex: 1,
            flexDirection: 'row'
          }}
        >
          <Touch
            onPress={() => this.handleClose()}
            style={{
              height: '100%',
              width: '20%'
            }}
          />
          <ScrollView
            style={{
              backgroundColor: 'blue',
              height: '100%',
              width: '80%'
            }}
          >
            <View
              style={{
                backgroundColor: colors.white,
                height: 75,
                width: '100%'
              }}
            />
          </ScrollView>
        </View>
      );
    }

    return render;
  }

  render() {
    const { show } = this.props;
    const { position } = this.state;

    if (show === false) {
      return null;
    }

    return (
      <Animated.View style={[styles.container, { left: position }]}>
        {this.renderLayout()}
      </Animated.View>
    );
  }
}

// default props
Menu.defaultProps = {
  direction: 'left'
};

// type checking
Menu.propTypes = {
  // optional
  direction: PropTypes.string
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 100
  }
});

export default Menu;
