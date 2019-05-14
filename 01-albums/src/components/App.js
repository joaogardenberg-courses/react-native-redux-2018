import React    from 'react';

import {
  View,
  Text
} from 'react-native';

import Header    from './Header';
import AlbumList from './AlbumList';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header headerText="Albums" />
      <AlbumList />
    </View>
  );
};

export default App;