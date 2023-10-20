import React, {Component} from 'react'

import {View, Text, StyleSheet,ScrollView} from 'react-native'


class App extends Component{

  render(){
    return(
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.box1}></View>
          <View style={styles.box2}></View>
          <View style={styles.box3}></View>
          <View style={styles.box4}></View>
          <View style={styles.box5}></View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  box1:{
    height: 250,
    backgroundColor: 'yellow'
  },
  box2:{
    height: 250,
    backgroundColor: 'red'
  },
  box3:{
    height: 250,
    backgroundColor: 'blue'
  },
  box4:{
    height: 250,
    backgroundColor: 'white'
  },
  box5:{
    height: 250,
    backgroundColor: 'black'
  },
  /*
  para deixar o scrool na horizontal:{
    showsHorizontalScrollIndicator={false},
    scrollEnabled={true},
    horizontal={true}
  } */
})

export default App;