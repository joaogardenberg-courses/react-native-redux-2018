import React from 'react';

import {
  View
} from 'react-native';

const CardSection = ({ style, children }) => {
  const { containerStyle } = styles;

  return (
    <View style={[ containerStyle, style ]}>
      { children }
    </View>
  );
};

const styles = {
  containerStyle: {
    backgroundColor:   '#fff',
    borderBottomWidth: 1,
    borderColor:       '#ddd',
    flexDirection:     'row',
    justifyContent:    'flex-start',
    padding:           5,
    position:          'relative'
  }
};

export { CardSection };