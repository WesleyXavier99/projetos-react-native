import React, {Component} from  'react'
import {View,Text,StyleSheet} from 'react-native'


class App extends Component{
  render(){
    return(
        <View style={styles.fundo}>
          <View style={styles.caixaVermelha}></View>
          <View style={styles.caixaAmarela}></View>
          <View style={styles.caixaVerde}></View>
          <View style={styles.caixaAzul}></View>
         </View>
    )
      
  }
}

const styles = StyleSheet.create({
  caixaVermelha:{
    width:50,
    height:50,
    backgroundColor: 'red'
  },
  caixaAmarela:{
    width:50,
    height:50,
    backgroundColor: 'yellow'
  },
  caixaVerde:{
    width:50,
    height:50,
    backgroundColor: 'green'
  },
  caixaAzul:{
    width:50,
    height:50,
    backgroundColor: 'blue'
  },
  fundo:{
    flex:1,
    backgroundColor: '#222',
    flexDirection: 'row',
    //flexDirection: 'column'
    justifyContent: 'center',
    //justifyContent: 'space-between'
    //justifyContent: 'flex-end'
    //justifyContent: 'flex-start'
    alignItems: 'center'
    //alignItems: 'flex-end'
    //alignItems: 'flex-start'
  },
  letras:{
    marginTop:35,
    fontSize: 30,
    alignSelf: 'center'
  }
  })

export default App;