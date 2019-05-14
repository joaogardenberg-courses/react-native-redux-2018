import { combineReducers } from 'redux';

import librariesReducer from './librariesReducer';
import selectionReducer from './selectionReducer';

export default combineReducers({
  libraries: librariesReducer,
  selectedLibraryId: selectionReducer
});