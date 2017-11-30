import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am a secondary component. Hear me roar</Text>
        <Text>Maribor 0-7 Liverpool</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

});


export default Test;