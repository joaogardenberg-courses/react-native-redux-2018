import React from 'react';

import {
  View,
  Text
} from 'react-native';

const Header = ({ headerText }) => {
  const { viewStyle, textStyle } = styles;

  return (
    <View style={ viewStyle }>
      <Text style={ textStyle }>
        { headerText }
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    alignItems:      'center',
    backgroundColor: '#f8f8f8',
    elevation:       2,
    height:          60,
    justifyContent:  'center',
    paddingTop:      15,
    position:        'relative',
    shadowColor:     '#000',
    shadowOffset:    { width: 0, height: 2 },
    shadowOpacity:   .2
  },
  textStyle: {
    fontSize: 20
  }
};

export default Header;