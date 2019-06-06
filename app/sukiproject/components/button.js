import React, { Component } from 'react';
import { View, Text, Button,StyleSheet,AppRegistry,TouchableOpacity } from 'react-native';


export default class CustomButn extends Component {
  render() {
    return (
      <View >
          <TouchableOpacity
         style={styles.button} >
         <Text style={{color:'#0000FF',textAlign:'center'}}> {this.props.button}  </Text>
       </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 20,
    color:'#ADD8E6',

  },
})
AppRegistry.registerComponent('CustomButn', () => CustomButn);