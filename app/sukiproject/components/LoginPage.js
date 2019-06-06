import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import React from 'react'


export default class Login extends React.Component {
  state = { username: "", password: "" }
  checkSignUp() {
    const { username, password } = this.state
    if (username == '' && password == '') {
      //console.warn('login is correct')           /* this way to print on console */
      this.props.navigation.navigate('dashboard')
    } else {
      //console.warn('login is incorrect')         /* this way to print on console */
      Alert.alert('Error', 'username/password mismatch', [{
        text: 'Okey'
      }])
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconView} />
        <View style={styles.textinputView}>
          <TextInput placeholder="username" style={styles.textinput} onChangeText={text => this.setState({ username: text })} />
          <TextInput placeholder="password" secureTextEntry={true} style={styles.textinput} onChangeText={text => this.setState({ password: text })} />


          <TouchableOpacity style={styles.loginBtn} onPress={() => this.checkSignUp()} >
            <Text style={{ fontSize: 17, color: '#fff' }}>Submit</Text>
          </TouchableOpacity>
          {/* <Text style={{ fontSize: 17, alignSelf: 'center', height: 20 }}>or</Text> */}

          {/* <TouchableOpacity
            style={[styles.loginBtn,
            {
              backgroundColor: '#fff',
              borderColor: "#518EF8",
              borderWidth: 1,
              flexDirection:'row',
            }]}>
            <View style={{flex:3,justifyContent:'center',alignItems:'flex-end'}}>
            <Image source={{uri:'https://www.hotelspeak.com/wp-content/uploads/2017/02/google-logo-1200x630.png'}}
            style={{height:30,width:30}}
            />
            </View>
            <View style={{flex:7,marginLeft:20}}>
            <Text style={{ fontSize: 17 }}>Sign Up With Google</Text>
            </View>
          </TouchableOpacity> */}
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,

  },
  iconView: {
    flex: 2,
    //   marginTop:100
  },
  textinputView: {
    flex: 3,
  },
  btnView: {
    flex: 4,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end'
  },
  textinput: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: '#ACB4BE'
  },
  loginBtn: {
    height: 55,
    width: '100%',
    backgroundColor: "#518EF8",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 1
  }

});

