import React, {Component} from  'react'
import {View,Text,StyleSheet} from 'react-native'


class App extends Component{
  render(){
    return(
        <View style={styles.fundo}>
          <View style={styles.caixaVermelha}>
              <Text style={styles.letras}>Wesley</Text>
          </View>
          <View style={styles.caixaAmarela}>
              <Text style={styles.letras}>Nathan</Text>
          </View>
          <View style={styles.caixaVerde}>
              <Text style={styles.letras}>Xavier</Text>
          </View>
        </View>
    )
      
  }
}

const styles = StyleSheet.create({
  caixaVermelha:{
    //flex:2,
    //width:50,
    //height:50,
    //backgroundColor: 'red'
    backgroundColor:'black'
  },
  caixaAmarela:{
    flex:1,
    //width:50,
    //height:50,
    //backgroundColor: 'yellow'
    backgroundColor:'white'
  },
  caixaVerde:{
    //flex:2,
    //width:50,
    //height:50,
    //backgroundColor: 'green'
    backgroundColor:'black'
  },
  fundo:{
    flex:1,
    backgroundColor: '#222'
  },
  letras:{
    marginTop:35,
    fontSize: 30,
    alignSelf: 'center'
  }
  })

export default App;