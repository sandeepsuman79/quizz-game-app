import React, { Component } from 'react';

import { View,Text,StyleSheet,Image,AppRegistry,TouchableOpacity} from 'react-native';
// import CustomButn from '../../sukiproject/components/button';
// import {createStackNavigator,createAppContainer} from 'react-navigation';
// import  Button1 from '../components/button1'


export default class Home extends Component {
  _goToLoginPage=()=>{
    this.props.navigation.navigate('Login')

}
_goToSignUp=()=>{
  this.props.navigation.navigate('Sign')
}
  render() {
    return (
      <View style={styles.container}>
          <Image
        style={{width:200,height:200,  alignSelf:'center',marginTop:80}}
         source={require('../static/img/Q.jpg')}
         /> 
      
        <View  style={{marginTop:100,width:300,alignSelf:'center',}} >
    
        <TouchableOpacity onPress={this._goToLoginPage} style={styles.loginBtn}>
            <Text style={{ fontSize: 17, color: '#fff' }}>LOG IN</Text>
          </TouchableOpacity>
          <View  style={{marginTop:10,width:300,alignSelf:'center',}} >
       <TouchableOpacity style={styles.SignUpBtn} onPress={this._goToSignUp}>
          <Text style={{ fontSize: 17, color: '#fff' }} >SIGN UP</Text>
       </TouchableOpacity>
       </View>
       
       </View>
      
  
      </View>
    );
  }
}
AppRegistry.registerComponent('DisplayAnImage', () => DisplayAnImage);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  justifyContent: 'center',
    // alignItems: 'center',

   backgroundColor: '#1803',
  },
  loginBtn: {
     height: 55,
     width: '100%',
    backgroundColor: "#518EF8",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    elevation: 1
  },
  SignUpBtn: {
    height: 55,
    width: '100%',
    backgroundColor: "#518EF8",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 60,
    elevation: 1,
    marginTop:10
  },

  
})