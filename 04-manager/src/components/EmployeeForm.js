import React       from 'react';
import { connect } from 'react-redux';

import {
  View,
  Picker,
  Text
} from "react-native";

import { employeeFormUpdate } from '../actions';

import {
  CardSection,
  Input
} from "./common";

class EmployeeForm extends React.Component {
  render() {
    return (
      <View>
        <CardSection>
          <Input
            label="Name"
            placeholder="John Doe"
            value={ this.props.name }
            onChangeText={ (value) => this.props.employeeFormUpdate({ prop: 'name', value }) }
          />
        </CardSection>

        <CardSection>
          <Input
            label="Phone"
            placeholder="(99) 99999-999"
            value={ this.props.phone }
            onChangeText={ (value) => this.props.employeeFormUpdate({ prop: 'phone', value }) }
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={ styles.pickerTextStyle }>
            Select a shift
          </Text>
          <Picker
            selectedValue={ this.props.shift || 'monday' }
            onValueChange={ (value) => this.props.employeeFormUpdate({ prop: 'shift', value }) }
          >
            <Picker.Item label="Monday"    value="monday" />
            <Picker.Item label="Tuesday"   value="tuesday" />
            <Picker.Item label="Wednesday" value="wednesday" />
            <Picker.Item label="Thursday"  value="thursday" />
            <Picker.Item label="Friday"    value="friday" />
            <Picker.Item label="Saturday"  value="saturday" />
            <Picker.Item label="Sunday"    value="sunday" />
          </Picker>
        </CardSection>
      </View>
    );
  }
}

const styles = {
  pickerTextStyle: {
    fontSize:    18,
    paddingLeft: 20
  }
};

EmployeeForm = connect(
  null,
  { employeeFormUpdate }
)(EmployeeForm);

export default EmployeeForm;