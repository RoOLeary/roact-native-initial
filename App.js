import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native' 

import RunInfo from './RunInfo';
import RunInfoNumeric from './run-info-numeric';

const styles = StyleSheet.create({
  infoWrapper: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
      flexDirection: 'row',
      flex: 1
    }
}); 


export default class App extends Component{
  
  constructor(props){

      super(props); 
      this.state = {}; 

      setInterval(() => {
        this.distanceInfo.setState({ value: Math.random() * 100 });
        this.speedInfo.setState({ value: Math.random() * 15 });
        this.directionInfo.setState({ 
          value: this.directionInfo.state === 'N' ? 'NW' : 'N'
      }); 
    }, 1000); 
  }


  render(){

    return(

      <View style={{ flex: 1}}>
        <Text style={{ flex: 1, backgroundColor: 'red'}}>Map View</Text>
        <View style={styles.infoWrapper}>
          <RunInfoNumeric name="Distance" 
            value="17km"
            unit="km"
            ref={(info) => this.distanceInfo = info} />
          <RunInfo name="Speed"
            value="10"
            unit="kp/h"
            ref={(info) => this.speedInfo = info} />
          <RunInfo name="Direction" 
            value="NE"
            ref={(info) => this.directionInfo = info}
            />
        </View>
      </View>
    );
  }
}