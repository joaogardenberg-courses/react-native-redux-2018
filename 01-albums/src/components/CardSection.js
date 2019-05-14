import React from 'react';

import {
  View
} from 'react-native';

const CardSection = ({ children }) => {
  const { containerStyle } = styles;

  return (
    <View style={ containerStyle }>
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

export default CardSection;