import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

const Touch = ({ onPress, style, text, textStyle }) => (
  <TouchableOpacity
    activeOpacity={gStyle.activeOpacity}
    onPress={onPress}
    style={style}
  >
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

// default props
Touch.defaultProps = {
  style: {},
  text: '',
  textStyle: {
    textAlign: 'center'
  }
};

// type checking
Touch.propTypes = {
  // required
  onPress: PropTypes.func.isRequired,

  // optional
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string,
  textStyle: PropTypes.object
};

export default Touch;
