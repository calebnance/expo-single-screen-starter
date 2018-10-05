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
    const { backgroundColor, position } = this.state;

    Animated.timing(backgroundColor, {
      delay: 200,
      duration: 400,
      toValue: 10
    }).start();

    Animated.timing(position, {
      duration: 400,
      toValue: 0
    }).start();
  }

  handleClose() {
    const { onClose } = this.props;
    const { backgroundColor, position, positionStart } = this.state;

    Animated.timing(backgroundColor, {
      duration: 100,
      toValue: 0
    }).start();

    Animated.timing(position, {
      duration: 400,
      toValue: positionStart
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

    const mockItems = [];

    for (let i = 0; i < 20; i += 1) {
      mockItems.push(<View key={i} style={styles.mockBlock} />);
    }

    const scrollViewArea = (
      <ScrollView style={styles.scrollView}>
        {mockItems}
        <View style={styles.listSpacer} />
      </ScrollView>
    );

    const closeArea = (
      <Touch onPress={() => this.handleClose()} style={styles.closeArea} />
    );

    if (direction === 'left') {
      render = (
        <Animated.View style={[styles.panel, { backgroundColor: color }]}>
          {scrollViewArea}
          {closeArea}
        </Animated.View>
      );
    } else if (direction === 'right') {
      render = (
        <Animated.View style={[styles.panel, { backgroundColor: color }]}>
          {closeArea}
          {scrollViewArea}
        </Animated.View>
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
  direction: 'left',
  show: false
};

// type checking
Menu.propTypes = {
  // required
  onClose: PropTypes.func.isRequired,

  // optional
  direction: PropTypes.string,
  show: PropTypes.bool
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: 50
  },
  panel: {
    flex: 1,
    flexDirection: 'row'
  },
  scrollView: {
    backgroundColor: colors.brown,
    paddingTop: device.iPhoneX ? 44 : 0,
    width: '80%'
  },
  closeArea: {
    height: '100%',
    width: '20%'
  },
  mockBlock: {
    backgroundColor: colors.grey,
    height: 75,
    marginBottom: 20,
    width: '100%'
  },
  listSpacer: {
    height: device.iPhoneX ? 44 : 0
  }
});

export default Menu;
