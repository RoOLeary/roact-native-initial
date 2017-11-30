import React from 'react';
import { Alert, ActivityIndicator, ListView, AppRegistry, Button, FlatList, ScrollView, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import Greeting from './Greeting';
import Test from './Test';
import SubHeader from './SubHeader';
import Blink from './Blink';


export default class App extends React.Component {

    constructor(){
      super(); 
      this.state = {
        isLoading: true,
        showOnload: true,
        collapse: false,
        value: ''
      }
    }

    _onPressButton() {
      Alert.alert('This is the dumbest application ever!')
    }

   handleClick() {
    this.setState({
      showOnload: !this.state.showOnload
    });
  }

   collapse() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  componentDidMount() {
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson.movies),
        }, function() {
          // do something with new state
        });
      })
      .catch((error) => {
        console.error("Deeeerp. You made a mistake. Sort it out: " + error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    let pic = {
        uri: 'https://www.fillmurray.com/200/150'
    };
    

    return (
      <ScrollView style={styles.container}>
        { this.state.showOnload ? <Image source={pic} style={{width: 193, height: 110}}/> : null }
        <SubHeader name="This is pretty sweet" />
        <FlatList
          data={[
            {
              name: 'Albert Einstein',
              born: 1879,
              died: 1955,
              field: 'Physicist'
            },
            {
              name: 'Tim Berners Lee',
              born: 1955,
              died: '',
              field: 'Created the internet'
            },
            {
              name: 'Jonas Salk',
              born: 1914,
              died: 1995,
              field: 'Cure for Polio'
            },
            {
              name: 'Alan Turing',
              born: 1912,
              died: 1954,
              field: 'Invented the computer, won a war.'
            },{
              name: 'Bill Shankly',
              born: 1913,
              died: 1981,
              field: 'Football'
            },
            {
              name: 'Ada Lovelace',
              born: 1815,
              died: 1882,
              field: 'Invented the computer, did\`t win a war.'
            }

          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.name} - {item.field} Born: {item.born} Died: {item.died ? item.died : "Not Dead"}</Text>}
        />
         <Button
          onPress={() => { this.collapse()}}
          title="Toggle Component"
        />
        {this.state.collapse &&
        <Test />
        }
        { this.state.showOnload ? <ListView 
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.title}, {rowData.releaseYear}</Text>}
        /> : null }
        
        <TextInput
            multiline = {true}
            numberOfLines = {6}
            maxLength = {130}
            placeholder='I am awesome because...'
            value={this.state.value}
            onChangeText={(value) => this.setState({value})}         
            />
      
         <Text>
            Characters Left:{this.state.value.length}/130
         </Text>
      
        <Text style={[styles.bigblue, styles.red]}>DarkRed and Fuck Mourhinho</Text>
        <Text style={[styles.red, styles.bigblue]}>Try Me, Try me!</Text>
        <Text>{this.state.showOnload ? "hide movie list" : "show movie list"}</Text>
        <Button
          onPress={ () => this.handleClick() }
          title="Change String"
          color="#841584"
          />

        <Text className={this.state.showOnload ? "hide" : "show"}>SO, theoretically I am good to go here. Just need to figure out what to build. And Who Are You, the proud Lord said, that I must bow so low.</Text>      
       
        <Greeting name="Dublin" />
        <Blink text="I can't believe they removed blink and marquee text from html. Pricks" /> 
        <Test />
        </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'darkred',
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44,
  },


});
