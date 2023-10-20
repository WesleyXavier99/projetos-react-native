import React, {Component} from 'react'

import {View, Text, StyleSheet,ScrollView,FlatList} from 'react-native'


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
          renderItem={({item})=> <Pessoa data={item}/>}
        />

      </View>
    );
  }
}

class Pessoa extends Component{
  render(){
    return(
      <View style={styles.areaPessoa}>
        <Text style={styles.textPessoa}>Id:{this.props.data.id}</Text>
        <Text style={styles.textPessoa}>Nome:{this.props.data.nome}</Text>
        <Text style={styles.textPessoa}>Idade:{this.props.data.idade}</Text>
        <Text style={styles.textPessoa}>Email:{this.props.data.email}</Text>
      </View>
    )
    ;
  }
}

const styles = StyleSheet.create({
  conteiner:{
    flex:1
  },
  areaPessoa:{
    backgroundColor: '#222',
    marginBottom:15,
    height:200
  },
  textPessoa:{
    fontSize:20,
    color: '#fff'
  }
});
export default App;