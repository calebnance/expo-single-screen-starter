import React from 'react';
import { Animated, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device } from '../api/constants';

// component(s)
import Touch from '../components/Touch';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    let startPos = -device.width;
    if (props.direction === 'right') {
      startPos = device.width;
    }

    this.state = {
      position: new Animated.Value(startPos)
    };
  }

  componentDidMount() {
    console.log('Menu::componentDidMount()');
  }

  componentDidUnMount() {
    console.log('Menu::componentDidUnMount()');
  }

  componentDidUpdate(prevProps) {
    console.log('Menu::componentDidUpdate()');

    const { show } = this.props;
    const { position } = this.state;
    if (show !== prevProps.show) {
      Animated.timing(position, {
        toValue: 0,
        // delay: 400,
        duration: 400
      }).start();
    }
  }

  render() {
    const { show } = this.props;
    const { position } = this.state;

    if (show === false) {
      return null;
    }

    return (
      <Animated.View
        style={{
          height: '100%',
          left: position,
          position: 'absolute',
          width: '100%',
          zIndex: 100
        }}
      >
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
            onPress={() => this.props.onClose()}
            style={{
              height: '100%',
              width: '20%'
            }}
          />
        </View>
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

export default Menu;
