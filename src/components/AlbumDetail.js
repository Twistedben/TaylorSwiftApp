import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Destructures 'props' to 'props.album' using {album} 
const AlbumDetail = ( {album} ) => {
  // Assigns album.title, album.artist, album.thumbnail_image.
  const { title, artist, thumbnail_image} = album;
  const { thumbnailStyle, headerContentStyle } = styles;
  return (
    <Card>
      <CardSection>
        <View>
          <Image 
            style={thumbnailStyle} 
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
 
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;