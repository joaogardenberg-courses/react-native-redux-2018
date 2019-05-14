import React    from 'react';

import {
  View,
  Image,
  Text,
  Linking
} from 'react-native';

import Card        from './Card';
import CardSection from './CardSection';
import Button      from './Button';

const AlbumDetail = ({ title, artist, thumbnail_image, image, url }) => {
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailContainerStyle,
    thumbnailStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      <CardSection>
        <View style={ thumbnailContainerStyle }>
          <Image
            style={ thumbnailStyle }
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={ headerContentStyle }>
          <Text style={ headerTextStyle }>
            { title }
          </Text>
          <Text>
            { artist }
          </Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
          style={ imageStyle }
          source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPress={ () => Linking.openURL(url) }>
          Buy now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection:  'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailContainerStyle: {
    alignItems:     'center',
    justifyContent: 'center',
    marginLeft:     10,
    marginRight:    10
  },
  thumbnailStyle: {
    height: 50,
    width:  50
  },
  imageStyle: {
    height: 300,
    flex:   1,
    width:  null
  }
};

export default AlbumDetail;