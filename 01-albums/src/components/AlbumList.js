import React          from 'react';
import axios          from 'axios';
import { ScrollView, View } from 'react-native';

import AlbumDetail from './AlbumDetail';

class AlbumList extends React.Component {
  state = { albums: [] };

  render() {
    return (
      <ScrollView>
        <View style={{ paddingBottom: 10 }}>
          { this.renderAlbums() }
        </View>
      </ScrollView>
    );
  }

  renderAlbums() {
    return this.state.albums.map((album) => {
      return (
        <AlbumDetail key={ album.title } { ...album } />
      );
    });
  }

  componentDidMount() {
    this.fetchAlbums();
  }

  fetchAlbums = async () => {
    const { data } = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');

    this.setState({ albums: data });
  };
}

export default AlbumList;