import React       from 'react';
import { connect } from 'react-redux';

import { Platform, UIManager } from 'react-native';

import {
  View,
  Text,
  TouchableWithoutFeedback,
  LayoutAnimation
} from 'react-native';

import { CardSection }   from './common';
import { selectLibrary } from '../actions';

class ListItem extends React.Component {
  render() {
    const { id, title }  = this.props.library.item;
    const { titleStyle } = styles;

    return (
      <TouchableWithoutFeedback onPress={ () => this.props.selectLibrary(id) }>
        <View>
          <CardSection>
            <Text style={ titleStyle }>
              { title }
            </Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }

  renderDescription() {
    const { expanded, library: { item: { description } } } = this.props;

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>
            { description }
          </Text>
        </CardSection>
      );
    }
  }

  constructor(props) {
    super(props);

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  componentWillUpdate() {
    LayoutAnimation.spring();
  }
}

const styles = {
  titleStyle: {
    fontSize:    18,
    paddingLeft: 15
  }
};

const mapStateToProps = ({ selectedLibraryId }, ownProps) => {
  return { expanded: selectedLibraryId === ownProps.library.item.id };
};

ListItem = connect(
  mapStateToProps,
  { selectLibrary }
)(ListItem);

export default ListItem;