import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Test extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>I am a secondary component. Hear me roar</Text>
        <Text>And so he spoke, and so he spoke, that Lord of Castamere, but now the rains, weep o'er his hall, with no-one there to hear.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default Test;