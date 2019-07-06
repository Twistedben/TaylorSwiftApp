import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
  // Set up a default state for a Class Level Property
  state = { albums: [] }; // INitializes state to a state of empty albums as default

  // This method will be called automatically as a lifecycle method once the component is rendered on the screen
  componentWillMount() {
    // Makes a HTTP GET request to the albums json site
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => this.setState( {albums: response.data })); // Album data as array and updating albums piece of State, no longer an empty array but the api returned objects
  }
  // Helper method to map over the albums in the array
  renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render() {
    console.log(this.state);
    return (
      <View>
          {this.renderAlbums()}
      </View>
    );  
  }
}

export default AlbumList;