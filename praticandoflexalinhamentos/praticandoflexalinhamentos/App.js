import React, {Component} from  'react'
import {View,Text,StyleSheet} from 'react-native'


class App extends Component{
  render(){
    return(
      <View style={styles.fundo}>
        <View style={styles.fundo}>
          <View style={styles.caixaAmarela}>
              <Text>Luffy Gear 1</Text>
          </View>
          <View style={styles.caixaVermelha}>
            <Text>Luffy Gear 2</Text>
          </View>
        </View>
        <View style={styles.fundo}>
          <View style={styles.caixaVerde}>
            <Text>Luffy Gear 3</Text>
          </View>
          <View style={styles.caixaAzul}>
            <Text>Luffy Gear 4</Text>
          </View>  
        </View>
      </View>
    )
      
  }
}


const styles = StyleSheet.create({
  caixaVermelha:{
    //width:50,
    height:100,
    backgroundColor: 'red'
  },
  caixaAmarela:{
    //width:50,
    height:100,
    backgroundColor: 'yellow'
  },
  caixaVerde:{
    //width:50,
    height:100,
    backgroundColor: 'green'
  },
  caixaAzul:{
    //width:50,
    height:100,
    backgroundColor: 'blue'
  },
  fundo:{
    flex:1,
    backgroundColor: '#222',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  letras:{
    marginTop:35,
    fontSize: 30,
    alignSelf: 'center'
  }
  })

export default App;