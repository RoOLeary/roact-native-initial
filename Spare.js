import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import Test from './Test'; 

export default class App extends Component {
  
  

  render(){
    return(
      <View style={styles.container}>
        <Text>App contents will go here</Text>
        <Test />
        <Text>App contents will go here</Text>
        <Text style={styles.box}>App contents will go here</Text>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    flex: 2,
    alignItems: 'stretch',
    height: 100,
    backgroundColor: '#333',
  },

});