export default (state = null, { type, payload }) => {
  switch(type) {
    case 'SELECT_LIBRARY':
      return payload;
    default:
      return state;
  }
}