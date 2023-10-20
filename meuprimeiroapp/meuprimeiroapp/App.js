//import react, {Componente} from 'react'
import React, {Component} from  'react'
import {View,Text,Image} from 'react-native'


class App extends Component{
  
    render(){

    return(
      <View>
        <Text>Luffy Gears</Text>
        <Luffy largura={300} altura={300}/>
      </View>
    );
  }
}

export default App; 

class Luffy extends Component{
  render(){
    let img = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/620b74cf-2071-4a49-9571-c97c1db1585d/df3gezw-6ec2dac5-c2ce-427c-b355-2d8279a766f7.png/v1/fill/w_959,h_833/monkey_d__luffy__gear_5____updated_by_b_a_i_o_r_e_t_t_o_df3gezw-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTExMiIsInBhdGgiOiJcL2ZcLzYyMGI3NGNmLTIwNzEtNGE0OS05NTcxLWM5N2MxZGIxNTg1ZFwvZGYzZ2V6dy02ZWMyZGFjNS1jMmNlLTQyN2MtYjM1NS0yZDgyNzlhNzY2ZjcucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.f9Ynpx3mSEYDWJFr7hhZm-pFxywC6hVMnKwUQZFuZgQ'
    let legenda = 'Luffy Gear 5'

    return(

      <View>
        <Text style={{color:"#FF0000", fontSize:20, margin:15}}> {legenda}</Text>
        <Image 
          source={{ uri: img }}
          style={{width:this.props.largura,height:this.props.altura}}
        />
      </View>
      

    );
  }
}