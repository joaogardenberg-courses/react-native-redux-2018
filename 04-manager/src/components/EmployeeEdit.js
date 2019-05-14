import React          from 'react';
import { connect }    from 'react-redux';
import _              from 'lodash';
import Communications from 'react-native-communications';

import EmployeeForm from './EmployeeForm';

import {
  employeeFormUpdate,
  employeeUpdate,
  employeeDestroy
} from '../actions';

import {
  Card,
  CardSection,
  Button,
  Confirm
} from './common';

class EmployeeEdit extends React.Component {
  state = { showModal: false };

  render () {
    return (
      <Card>
        <EmployeeForm { ...this.props } />

        <CardSection>
          <Button onPress={ this.onButtonPress }>
            Save changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={ this.onTextPress }>
            Text schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={ this.onFirePress }>
            Fire
          </Button>
        </CardSection>

        <Confirm
          visible={ this.state.showModal }
          onAccept={ this.onFireAccept }
          onDecline={ this.onFireDecline }
        >
          Are you sure you want to fire this employee?
        </Confirm>
      </Card>
    );
  }

  componentDidMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeFormUpdate({ prop, value });
    });
  }

  onButtonPress = () => {
    const { name, phone, shift, employee: { uid } } = this.props;
    this.props.employeeUpdate({ name, phone, shift, uid });
  };

  onTextPress = () => {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  };

  onFirePress = () => {
    this.setState({ showModal: true });
  };

  onFireAccept = () => {
    const { employee: { uid }, employeeDestroy } = this.props;
    employeeDestroy({ uid });
  };

  onFireDecline = () => {
    this.setState({ showModal: false });
  };
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }) => {
  return { name, phone, shift };
};

EmployeeEdit = connect(
  mapStateToProps,
  {
    employeeFormUpdate,
    employeeUpdate,
    employeeDestroy
  }
)(EmployeeEdit);

export default EmployeeEdit;