import React           from 'react';
import { View }        from 'react-native';
import { createStore } from 'redux';
import { Provider }    from 'react-redux';

import reducers      from './reducers';
import { Header }    from './components/common';
import LibrariesList from './components/LibrariesList';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <View style={{ flex: 1 }}>
        <Header headerText="Tech Stack" />
        <LibrariesList />
      </View>
    </Provider>
  );
};

export default App;