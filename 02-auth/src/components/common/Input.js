import React from 'react';

import {
  View,
  Text,
  TextInput
} from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={ containerStyle }>
      <Text style={ labelStyle }>
        { label }
      </Text>
      <TextInput
        autoCorrect={ false }
        value={ value }
        placeholder={ placeholder }
        onChangeText={ onChangeText }
        style={ inputStyle }
        secureTextEntry={ secureTextEntry }
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    alignItems:    'center',
    flex:          1,
    flexDirection: 'row',
    height:        40,
  },
  labelStyle: {
    fontSize:    18,
    flex:        1,
    paddingLeft: 20,
  },
  inputStyle: {
    color:        '#000',
    flex:         2,
    fontSize:     18,
    lineHeight:   23,
    paddingLeft:  5,
    paddingRight: 5
  }
};

export { Input };