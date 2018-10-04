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
      position: new Animated.Value(positionStart),
      positionStart
    };

    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    // console.log('Menu::componentDidMount()');
    const { position } = this.state;

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
    const { position, positionStart } = this.state;

    Animated.timing(position, {
      toValue: positionStart,
      // delay: 400,
      duration: 400
    }).start(() => {
      onClose();
    });
  }

  renderLayout() {
    const { direction } = this.props;
    let render = '';
    if (direction === 'left') {
      render = (
        <View
          style={{
            backgroundColor: colors.white50,
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
          <Touch
            onPress={() => this.handleClose()}
            style={{
              height: '100%',
              width: '20%'
            }}
          />
        </View>
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
