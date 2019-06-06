import React, { Component } from 'react';
import { View, Text,TextInput,Button, StyleSheet  } from 'react-native';

class SignUP extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  conformSignUp(){
    this.props.navigation.navigate('dashboard')
  }
  render() {
    return (
      <View>
            <TextInput placeholder="FirstName" style={Styles.textInpt} />
          <TextInput placeholder="LastName" style={Styles.textInpt} />
          <TextInput placeholder="Email_Id" style={Styles.textInpt} />
          <TextInput placeholder="Create_Password" secureTextEntry={true} style={Styles.textInpt} />
          <TextInput placeholder="Confirm_Password" secureTextEntry={true} style={Styles.textInpt} />
          <Button title="Register" onPress={()=>this.conformSignUp()} />
      </View>
    );
  }
}

export default SignUP;
const Styles = StyleSheet.create({
    textInpt:{
        height: 45,
      borderBottomWidth: 1,
      borderColor: '#ACB4BE',
    },
});