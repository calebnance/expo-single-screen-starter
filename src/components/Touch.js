import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { gStyle } from '../constants';

const Touch = ({ activeO, onPress, style, text, textStyle }) => (
  <TouchableOpacity activeOpacity={activeO} onPress={onPress} style={style}>
    <Text style={textStyle}>{text}</Text>
  </TouchableOpacity>
);

// default props
Touch.defaultProps = {
  activeO: gStyle.activeO,
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
  activeO: PropTypes.number,
  style: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.number,
    PropTypes.object
  ]),
  text: PropTypes.string,
  textStyle: PropTypes.object
};

export default Touch;
