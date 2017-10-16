import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default Greeting; 