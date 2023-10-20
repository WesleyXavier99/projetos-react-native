import React, {Component} from  'react'
import {View,Text,StyleSheet,Image,Button,Pressable,TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import GradientButton from './components/BotaoGradiente'


class App extends Component{

  render(){
    return(

      <LinearGradient
        colors={['#7845AC', '#A544C2']}
        style={{ flex: 1 }}
        start={[0, 0]}
        end={[0, 1]}
      >
      {<View style={styles.fundoTela}>
          <LogoSeeForMee/>
            <Text style={styles.textoInicial}>Junte-se à comunidade e participe da criação de uma ponte entre indivíduos com deficiência visual, voluntários e inteligência artificial.</Text>
            <GradientButton
              accessibilityLabel="Cadastrar"
              accessible={true}
              title='CADASTRAR'
            />

            <TouchableOpacity style={styles.botaoCadastrar}>
              <Text style={styles.textoFazerLogin}>FAZER LOGIN</Text>
            </TouchableOpacity>
            
      </View>}
</LinearGradient>

      
    );
  }
}

class LogoSeeForMee extends Component{

  render(){
    //let logo =require('./logo.svg');
    let descricao = "Logo do Aplicativo SeeForMe";

    return(
      <View>
          <Image
            source={require('logo.png')}
            style={{width: 215,
            height: 150,marginTop: 35}}
          />
          <Text style={{fontSize:40,alignSelf:'center',fontFamily:'Roboto',marginTop:0,color:'white'}}   >SeeForMe</Text>
      </View>
  );
  }
  

}

const styles = StyleSheet.create({
    fundoTela:{
      flex:1,
      alignItems: 'center',
      marginTop:60
      //backgroundColor:'#7845AC'
    },
    textoInicial:{
      fontSize:20,
      padding:7,
      marginTop:24,
      marginBottom:48,
      marginLeft: 40,
      marginRight: 40,
      justifyContent:'center',
      textAlign: 'center',
      fontFamily:'Roboto',
      fontWeight: '500',
      color:'white'
    } ,
    botaoCadastrar:{
      fontFamily: 'Roboto',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 10,
      paddingHorizontal: 100,
      borderRadius: 20,
      borderWidth: 1.5,
      borderColor: '#7845AC',
      width:330,
      backgroundColor: 'transparent',
      marginTop:15,
      height: 50
  },
  textoFazerLogin:{
    color:'white'
  }

})

export default App;