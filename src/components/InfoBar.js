import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { colors, device } from '../api/constants';

class InfoBar extends React.PureComponent {
  render() {
    const { text } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    );
  }
}

// type checking
InfoBar.propTypes = {
  // required
  text: PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: colors.white,
    borderRadius: 4,
    top: device.iPhoneX ? 64 : 20,
    paddingVertical: 8,
    position: 'absolute',
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
