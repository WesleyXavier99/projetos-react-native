import React, {Component} from 'react'

import {View, Text, StyleSheet,TextInput,Button} from 'react-native'


class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: 'Wesley',
      input:''
    }
    this.entrar = this.entrar.bind(this)
  }

  entrar(){
    if(this.state.input.length > 0){
      //this.setState({nome: 'Bem vindo, ' + texto + '!'})
      this.setState({nome: 'Bem vindo, ' + this.state.input + '!'})
    }else{
      this.setState({nome:''})
      alert("Digite seu nome")
    }
    
  }

  /**pegaNome(texto){
    if(texto.length > 0){
      this.setState({nome: 'Bem vindo, ' + texto + '!'})
    }else{
      this.setState({nome:''})
    }
    
  } */

  render(){
    return(
      <View style={styles.container}>

        <TextInput style={styles.input}
        placeholder="Digite seu nome aqui"
        underlineColorAndroid="transparent"
        onChangeText={ (texto) => this.setState({input:texto})}

        />

        <Button title="Entrar" onPress={this.entrar}/>

        <Text style={styles.text}>{this.state.nome}</Text>
      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    padding: 10
  },
  text:{
    textAlign:'center',
    fontSize: 25
  }
})

export default App;