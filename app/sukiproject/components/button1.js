
// import React, { Component } from 'react';
// import { AppRegistry, StyleSheet, Text, View,Button,Linking } from 'react-native';

//  class Button1 extends Component {
//   render() {
//     return (
  
//       <View style = {{alignItems: 'center'}}>
        
//         <Text style={styles.Red} onPress={ ()=> Linking.openURL('https://google.com') }>This is Red Color</Text>
        
 
       
        
//       </View>
 
//     );
//   }
// }
//  export default Button1
// const styles = StyleSheet.create({

 
 
//   Red: {
    
//     // Define your HEX color code here.
//     color: '#F44336',
//     borderWidth: 2,
//     borderColor: '#FFFFFF',
//     backgroundColor:'#FFFFFF',
//     width:'100%',
//     height:'35%',
//     borderRadius: 10,
//     paddingTop: 18,
//     textAlign:'center',
//     marginTop: 50,
    
//   },

  
  
// });

// AppRegistry.registerComponent('Button1', () => Button1);


import React, { Component } from 'react'
import { Text, View,StyleSheet} from 'react-native'

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> Home </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
  }
})

