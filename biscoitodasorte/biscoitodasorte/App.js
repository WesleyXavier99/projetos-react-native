import React, {Component} from 'react'

import {View, Text, StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'


class App extends Component{

  //state com uma frase e uma imagem, uma função para quebrar o biscoito e um vetor de frases
  constructor(props){
    super(props);
    this.state = {
      textoFrase: 'nada',
      img: require('./src/biscoito.png')
    }
    this.quebraBiscoito = this.quebraBiscoito.bind(this);
    this.frases = [
      'A vida trará coisas boas se tiver paciência.',
      'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
      'Não compense na ira o que lhe falta na razão.', 'Defeitos e virtudes são apenas dois lados da mesma moeda.',
       'A maior de todas as torres começa no solo.',
        'Não há que ser forte. Há que ser flexível.',
         'Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?', 
         'Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.', 
         'A juventude não é uma época da vida, é um estado de espírito.',
          'Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.'
    ];
  }

//função que muda a imagem do biscoito e define uma nova frase a ser exibida
  quebraBiscoito(){
    let numAleatorio = Math.floor(Math.random() * this.frases.length)

    this.setState({
      textoFrase:this.frases[numAleatorio],
      img: require('./src/biscoitoAberto.png')
    })
  }


  render(){
    return(
      <View style={styles.container}>

        <Image
        source={this.state.img}
        style={styles.img}
        />

        <Text style={styles.textFora}>{this.state.textoFrase}</Text>

        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.areaBtn}>
              <Text style={styles.textBtn}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
      
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  textFora:{
    fontSize: 25,
    color: '#dd7b22',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  },
  img:{
    width:250,
    height:250
  },
  botao:{
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25,

  },
  areaBtn:{
    flex:1,
    flexDirection: 'row',
    justifyContent:'center',
    alignItems:'center',
    color: '#dd7b22'
  },
  textBtn:{
    color:'#dd7b22'
  }

})

export default App;