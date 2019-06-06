import React, { Component } from 'react';
import {View,Text,Alert,BackHandler} from 'react-native';
	
import CountDown from 'react-native-countdown-component';
export default class TimerGo extends Component {
 
//  componentWillMount(){
//   BackHandler.addEventListener('hardwareBackPress', function() {
//     // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
//     // Typically you would use the navigator here to go to the last state.
  
   
//     return true;
//   });
//  } 
 
onDoneCountdown = () => {
 this.props.navigation.navigate('playgame')
   // Alert.alert("Countdown Finish.");
 
  }
 
  onPressCountdown = () => {
 
    Alert.alert("Countdown Component Press.");
 
  }
       render() {
           return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
        <CountDown
        
          until={3}
          onFinish={this.onDoneCountdown}
          onPress={this.onPressCountdown}
          digitStyle={{backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625'}}
          digitTxtStyle={{color: '#1CC625'}}
          timeToShow={['S']}
          timeLabels={{s: 'SS'}}
          size={30}
        />
               </View>
           )
       }
   }
   
