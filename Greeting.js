import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Greeting extends React.Component {
  render() {
    return (
      <Text>{this.props.greeting} {this.props.name}!</Text>
    );
  }
}

export default Greeting; 