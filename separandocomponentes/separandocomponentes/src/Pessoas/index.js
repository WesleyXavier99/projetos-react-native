import React, {Component} from 'react';
import {Text,View,StyleSheet} from 'react-native'


class Pessoas extends Component{
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
  areaPessoa:{
    backgroundColor: '#222',
    marginBottom:15,
    height:200
  },
  textPessoa:{
    fontSize:20,
    color: '#fff'
  }
})

export default Pessoas;

