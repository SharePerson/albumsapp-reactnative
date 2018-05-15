import React from 'react';
import { Text, View, Image, Linking } from 'react-native';

import { Card, CardSection, Button } from './common';

export default class AlbumDetail extends React.Component {

  render() {
    const { title, artist, thumbnail_image, image, url } = this.props.album;

    return (
      <Card>
        <CardSection>
          <View style={styles.thumbnailContainerStyle}>
            <Image style={styles.thumbnailStyle} source={{ uri: thumbnail_image }} />
          </View>
          <View style={styles.headerContentStyle}>
            <Text style={styles.albumTitleStyle}>{title}</Text>
            <Text>{artist}</Text>
          </View>
        </CardSection>
        <CardSection>
          <Image style={styles.albumImageStyle} source={{ uri: image }} />
        </CardSection>
        <CardSection>
          <Button click={() => Linking.openURL(url)}>
            Buy Now
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    albumTitleStyle: {
      fontSize: 18,
      fontWeight: 'bold'
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    albumImageStyle: {
      height: 300,
      flex: 1,
      width: null
    }
};
