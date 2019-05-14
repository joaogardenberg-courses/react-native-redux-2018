import React        from 'react';
import { connect }  from 'react-redux';
import _            from 'lodash';
import { ListView } from 'react-native';

import { employeesFetch } from '../actions';
import ListItem           from './ListItem';

class EmployeeIndex extends React.Component {
  render() {
    if (!this.dataSource) {
      return null;
    }

    return(
      <ListView
        enableEmptySections
        dataSource={ this.dataSource }
        renderRow={ this.renderRow }
      />
    );
  }

  renderRow(employee) {
    return <ListItem employee={ employee } />
  }

  componentDidMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(employees);
  }
}

const mapStateToProps = ({ employees }) => {
  const emp = _.map(employees, (val, uid) => ({ ...val, uid }));
  return { employees: emp };
};

EmployeeIndex = connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeIndex);

export default EmployeeIndex;