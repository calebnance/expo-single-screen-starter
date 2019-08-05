import React from 'react';
import PropTypes from 'prop-types';
import { Animated, StyleSheet, View } from 'react-native';
import { colors } from '../constants';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animation: new Animated.Value(props.progress)
    };
  }

  componentDidUpdate(prevProps) {
    const { duration, progress } = this.props;
    const { animation } = this.state;

    if (prevProps.progress !== progress) {
      Animated.timing(animation, {
        duration,
        toValue: progress
      }).start();
    }
  }

  render() {
    const { bar, fill, height } = this.props;
    const { animation } = this.state;

    const width = animation.interpolate({
      inputRange: [0, 100],
      outputRange: ['0%', '100%'],
      extrapolate: 'clamp'
    });

    return (
      <View style={[styles.container, { height }]}>
        <View style={[StyleSheet.absoluteFill, { backgroundColor: bar }]} />
        <Animated.View
          style={[styles.progressFill, { backgroundColor: fill, width }]}
        />
      </View>
    );
  }
}

ProgressBar.defaultProps = {
  bar: colors.black20,
  duration: 1000,
  fill: colors.red,
  height: 4
};

ProgressBar.propTypes = {
  // required
  progress: PropTypes.number.isRequired,

  // optional
  bar: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  duration: PropTypes.number,
  fill: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.number
};

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  progressFill: {
    bottom: 0,
    left: 0,
    position: 'absolute',
    top: 0
  }
});

export default ProgressBar;
