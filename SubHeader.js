import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

class SubHeader extends React.Component {

	

  render() {
  	let pic = {
	  uri: 'https://www.fillmurray.com/200/150'
	};
    return (
    <View>
      <Text>I am the Subheader! {this.props.name}</Text>
      <Text id="flashy"></Text>
    </View>
    );
  }
}

export default SubHeader; 