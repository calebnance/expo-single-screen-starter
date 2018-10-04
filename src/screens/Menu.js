import React from 'react';
import { Animated } from 'react-native';
import { device } from '../api/constants';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      position: new Animated.Value(-device.width)
    };
  }

  componentDidMount() {
    // console.log('componentDidMount()');

    const { position } = this.state;

    Animated.timing(position, {
      toValue: 0,
      delay: 400,
      duration: 400
    }).start();
  }

  render() {
    const { position } = this.state;

    return (
      <Animated.View
        style={{
          backgroundColor: 'red',
          left: position,
          position: 'absolute',
          height: '100%',
          width: '80%',
          zIndex: 100
        }}
      />
    );
  }
}

export default Menu;
