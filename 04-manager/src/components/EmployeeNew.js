import React       from 'react';
import { connect } from 'react-redux';

import EmployeeForm       from './EmployeeForm';
import { employeeCreate } from '../actions';

import {
  Card,
  CardSection,
  Button
} from './common';

class EmployeeNew extends React.Component {
  render() {
    return (
      <Card>
        <EmployeeForm { ...this.props } />

        <CardSection>
          <Button onPress={ this.onButtonPress }>
            Create
          </Button>
        </CardSection>
      </Card>
    );
  }

  onButtonPress = () => {
    const { name, phone, shift, employeeCreate } = this.props;
    employeeCreate({ name, phone, shift: shift || 'monday' });
  };
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
  return { name, phone, shift };
};

EmployeeNew = connect(
  mapStateToProps,
  { employeeCreate }
)(EmployeeNew);

export default EmployeeNew;