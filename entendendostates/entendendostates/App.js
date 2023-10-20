import React, {Component} from  'react'
import {View,Text,Image,Button} from 'react-native'


class App extends Component{

  constructor(props){
      super(props);
      this.state = {
        nome: ' ',
        idade: 0
      }
      this.entrar = this.entrar.bind(this)
      this.mudaIdade = this.mudaIdade.bind(this)
  }

  entrar(){
    this.setState({
      nome: 'Wesley Nathan'
    })
  }

  mudaIdade(){
    console.log(this.nome)
    if(this.nome==' '){
      this.setState({idade:100})
    }else{
      this.setState({idade:23})
    }

  }

  render(){
    return(
      <View style={{ marginTop:20}}>
        <Text style={{fontSize:23, color:'red', textAlign:'center'}}>Nome: {this.state.nome}</Text>
        <Text style={{fontSize:23, color:'red', textAlign:'center'}}>Idade: {this.state.idade}</Text>
        <Button title="Entrar" onPress={ () => this.entrar()}/>
        <Button title="mudar" onPress={ () => this.mudaIdade()}/>
      </View>
    )
      
  }
}

export default App;