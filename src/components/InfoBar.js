import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device } from '../api/constants';

// component(s)
import ProgressBar from './ProgressBar';

class InfoBar extends React.PureComponent {
  render() {
    const { progress, text } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <ProgressBar progress={progress} />
      </View>
    );
  }
}

// type checking
InfoBar.propTypes = {
  // required
  progress: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    overflow: 'hidden',
    paddingVertical: 8,
    position: 'absolute',
    shadowColor: colors.black,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowOpacity: 0.4,
    shadowRadius: 1,
    top: device.iPhoneX ? 64 : 20,
    width: 200,
    zIndex: 70
  },
  text: {
    color: colors.red,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default InfoBar;
