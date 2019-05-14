import React        from 'react';
import { FlatList } from 'react-native';
import { connect }  from 'react-redux';

import ListItem from './ListItem';

class LibrariesList extends React.Component {
  render() {
    return (
      <FlatList
        data={ this.props.libraries }
        renderItem={ this.renderItem }
        keyExtractor={ (library) => library.id.toString() }
      />
    );
  }

  renderItem(library) {
    return <ListItem library={ library } />
  }
}

const mapStateToProps = ({ libraries }) => {
  return { libraries };
};

LibrariesList = connect(
  mapStateToProps
)(LibrariesList);

export default LibrariesList;