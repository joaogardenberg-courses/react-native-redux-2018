import React       from 'react';
import { Actions } from 'react-native-router-flux';

import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';

import { CardSection } from './common';

class ListItem extends React.Component {
  render() {
    const { name } = this.props.employee;

    return (
      <TouchableWithoutFeedback onPress={ this.onRowPress }>
        <View>
          <CardSection>
            <Text style={ styles.titleStyle }>
              { name }
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }

  onRowPress = () => {
    Actions.employeeEdit({ employee: this.props.employee });
  };
}

const styles = {
  titleStyle: {
    fontSize:    18,
    paddingLeft: 15
  }
};

export default ListItem;