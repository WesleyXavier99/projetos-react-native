import React, {Component} from 'react'

import {View, Text, StyleSheet,ScrollView,FlatList} from 'react-native'

import Pessoas from './src/Pessoas'

class App extends Component{

constructor(props){
  super(props);
  this.state = {
    feed: [
      {id:1, nome:'Wesley Nathan', idade:23, email:'Wesley@1234.com'},
      {id:2, nome:'xavier da silva', idade:8, email:'xavier@1234.com'},
      {id:3, nome:'joão vitor', idade:8, email:'Wesley@1234.com'},
      {id:4, nome:'marcio abel', idade:23, email:'Wesley@1234.com'},
      {id:5, nome:'lucas luiz', idade:54, email:'lucas@1234.com'},
      {id:6, nome:'leo dias', idade:46, email:'leo@1234.com'},
      {id:7, nome:'fabio jose', idade:87, email:'fabio@1234.com'},
      {id:8, nome:'daniel amaro', idade:37, email:'daniel@1234.com'},
      {id:9, nome:'felipe costa', idade:48, email:'felipe@1234.com'},
    ],
  }
}

  render(){
    return(
      <View style={styles.conteiner}>
      
        <FlatList
          data={this.state.feed}
          keyExtractor={(item) => item.id}
          renderItem={({item})=> <Pessoas data={item}/>}
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  conteiner:{
    flex:1
  }
});
export default App;