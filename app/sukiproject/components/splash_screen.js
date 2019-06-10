import React, { Component } from "react";
import {
  Linking,
  Alert,
  ImageBackground,
  TextInput,
  View,
  Text,
  StyleSheet,
  Image,
  AppRegistry,
  TouchableOpacity
} from "react-native";
//import Hyperlink from "react-native-hyperlink";
import { LoginManager } from "react-native-fbsdk";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";
import { Button, Avatar } from "react-native-paper";
import LinearGradient from "react-native-linear-gradient";

export default class SplashScreen extends Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
  };

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();
    GoogleSignin.configure();
    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  //   _goToLoginPage=()=>{
  //     this.props.navigation.navigate('Login')

  // }
  GoToLogin() {
    this.props.navigation.navigate("Login");
  }
  // state = { username: "", password: "" };
  // checkSignUp() {
  //   const { username, password } = this.state;
  //   if (username == "" && password == "") {
  //     //console.warn('login is correct')           /* this way to print on console */
  //     this.props.navigation.navigate("dashboard");
  //   } else {
  //     //console.warn('login is incorrect')         /* this way to print on console */
  //     Alert.alert("Error", "username/password mismatch", [
  //       {
  //         text: "Okey"
  //       }
  //     ]);
  //   }
  // }
  _goToSignUp = () => {
    this.props.navigation.navigate("Sign");
  };

  fbLogin = () => {
    LoginManager.logInWithReadPermissions(["public_profile"]).then(
      result => {
        if (result.isCancelled) {
          alert("ok");
          // console.log("Login cancelled");
        } else {
          //  console.log(
          //   "Login success with permissions: " +
          //   result.grantedPermissions.toString()
          //     );

          this.props.navigation.navigate("dashboard");
        }
      },
      function(error) {
        console.log("Login fail with error: " + error);
      }
    );
  };

  googleSignIn = async () => {
    try {
      // alert('go')
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      this.setState({ userInfo });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        // alert('ok')
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // alert('yes')
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        alert("oh");
      } else {
        // some other error happened

        this.props.navigation.navigate("dashboard");
      }
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "green"
          }}
        >
          <Text style={{ fontSize: 50, fontWeight: "bold" }}>Welcome !</Text>
        </View>
      );
    } else {
      return (
        <ImageBackground
          source={require("../static/img/bg1.png")}
          style={styles.container}
        >
          <View
            style={{
              flex: 3,
              alignItems: "center",
              justifyContent: "center"
              //width: "50%"
            }}
          >
            <Image
              style={{ flex: 1, resizeMode: "contain" }}
              source={require("../static/img/loggo.png")}
            />
            {/* <Text style={{ fontSize: 80 }}>Q</Text> */}
          </View>

          <LinearGradient
            colors={["#489FCC", "#FFA067", "#50256F", "#50256F"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              borderRadius: 100,
              // borderLeftWidth: 6,
              //borderLeftColor: LinearGradient("red", "blue"),
              // borderRightWidth: 5,
              // borderTopWidth: 7,
              // borderRightColor: "#50256F",

              width: "90%",
              height: "100%",
              alignItems: "center",
              justifyContent: "space-around",
              flex: 3
            }}
          >
            <View
              style={{
                // flex: 1,
                backgroundColor: "#FFA067",
                borderRadius: 100,
                width: "97%",
                height: "95%",
                justifyContent: "center",
                alignItems: "center"
                //justifyContent: "flex-start"
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    fontFamily: "Amaranth-Bold",
                    color: "#000000"
                  }}
                >
                  Quizz Winner
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  flex: 2,
                  alignItems: "center",
                  justifyContent: "center",
                  width: "70%",
                  marginBottom: 10
                }}
              >
                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    alignItems: "center",
                    //alignSelf: "auto",
                    justifyContent: "center",
                    justifyContent: "flex-start"
                  }}
                >
                  <Avatar.Image size={60} style={{ marginBottom: 15 }} />

                  <Text
                    style={{
                      textAlign: "center",
                      backgroundColor: "#50256F",
                      borderRadius: 40,
                      //marginBottom: "2%"
                      fontFamily: "Amaranth-Bold",
                      width: "90%",
                      height: "20%",
                      textAlignVertical: "center"
                    }}
                  >
                    1st Rank
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    justifyContent: "flex-start"
                  }}
                >
                  <Avatar.Image size={60} style={{ marginBottom: 15 }} />

                  <Text
                    style={{
                      textAlign: "center",

                      backgroundColor: "#50256F",
                      borderRadius: 40,
                      fontFamily: "Amaranth-Bold",
                      width: "90%",
                      height: "20%",
                      textAlignVertical: "center"
                    }}
                  >
                    2nd Rank
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                    justifyContent: "flex-start"
                  }}
                >
                  <Avatar.Image size={60} style={{ marginBottom: 15 }} />

                  <Text
                    style={{
                      textAlign: "center",
                      backgroundColor: "#50256F",
                      borderRadius: 40,
                      fontFamily: "Amaranth-Bold",
                      width: "90%",
                      height: "20%",
                      textAlignVertical: "center"
                      //marginBottom: 7
                    }}
                  >
                    3rd Rank
                  </Text>
                </View>
              </View>
            </View>
          </LinearGradient>
          {/* <Image
      //style={{width:200,height:200,  alignSelf:'center',marginTop:80}}
       //source={require('../static/img/Q.jpg')}
       />  */}

          {/* 
          <TouchableOpacity
            style={{ borderWidth: 2, borderColor: "#2980b9", width: '60%', height: 40, marginBottom: 10 }}
            onPress={this.fbLogin}>
            <Text style={{ color: 'blue', alignItems: "center", justifyContent: 'space-between', textAlign: 'center' }}>
              <Image style={{ height: 30, }} source={require("../static/img/fb.png")} />
              <Text style={{ lineHeight: 25 }}>Login with facebook</Text>
            </Text>
          </TouchableOpacity> */}
          {/* <Text style={{ marginBottom: 10, fontSize: 20, }}>or</Text> */}

          {/* <TouchableOpacity
            style={{ borderWidth: 2, borderColor: "#2980b9", width: '60%', height: 40, marginBottom: 10 }}
            onPress={this.googleS..</div>
            <Text style={{ color:..</div>r", justifyContent: 'space-between', textAlign: 'center' }}>
              <Image style={{ hei..</div>("../static/img/google.png")} />
              <Text style={{ line..</div>ogle</Text>
            </Text>
          </TouchableOpacity>  */}

          {/* <TouchableOpacity 
    style={{borderWidth:2,borderColor:"#2980b9",width:'60%',height:40,marginBottom:10}}
    onPress={() => Linking.openURL('http://gmail.com')}>
  <Text style={{color: 'blue',alignItems:"center",justifyContent:'space-between',textAlign:'center'}}>
  <Image style={{height:30,}} source={require("../static/img/google.png")}/>
    <Text style={{lineHeight:25}}>Login with google</Text>
  </Text>
</TouchableOpacity>   */}

          {/* <Hyperlink linkDefault={ true }
                      linkStyle={ { color: '#2980b9',marginBottom: 20,} }
                      linkText={ url => url === 'https://www.facebook.com' 
                      ?  <Image source={require("../static/img/fb.png")}/> : url }
                    >
                      <Text style={ { fontSize: 15 } }>
                      https://www.facebook.com
                      </Text> 
                    </Hyperlink> */}

          {/* <TouchableOpacity onPress={this._goToLoginPage} style={styles.loginBtn}>
                          <Text style={{ fontSize: 17, color: '#fff' }}>LOG IN</Text>
                        </TouchableOpacity> */}

          {/* <View style={{ marginTop: 15, width: '80%', alignSelf: 'center', }}>
            <TextInput placeholder="username" style={styles.textinput} onChangeText={text => this.setState({ username: text })} />
            <TextInput placeholder="password" secureTextEntry={true} style={styles.textinput} onChangeText={text => this.setState({ password: text })} />
            <Text style={{ color: '#2980b9', marginTop: 5 }}>Forgot Password ?</Text>

            <TouchableOpacity style={styles.loginBtn} onPress={() => this.checkSignUp()} >
              <Text style={{ fontSize: 17, color: '#fff' }}>Submit</Text>
            </TouchableOpacity>
          </View> */}

          <View
            style={{
              flex: 5,
              //marginTop: 10,
              width: "80%",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={styles.loginBtn}
              onPress={() => this.GoToLogin()}
            >
              <LinearGradient
                colors={["#489FCC", "#FFA067", "#50256F", "#50256F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  width: "95%",
                  height: "70%",
                  borderRadius: 20,
                  //flex: 2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    // color: "#fff",
                    fontFamily: "Amaranth-Bold",
                    backgroundColor: "#FFA067",
                    textAlign: "center",
                    borderRadius: 15,
                    textAlignVertical: "center",
                    width: "97%",
                    height: "82%",
                    color: "#000000"

                    //flex: 1

                    // borderWidth: 3
                  }}
                >
                  LOG IN
                </Text>
              </LinearGradient>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.SignUpBtn}
              onPress={this._goToSignUp}
            >
              <LinearGradient
                colors={["#489FCC", "#FFA067", "#50256F", "#50256F"]}
                start={{ x: 0.0, y: 1.0 }}
                end={{ x: 1.0, y: 1.0 }}
                style={{
                  width: "95%",
                  height: "70%",
                  borderRadius: 20,
                  //flex: 2,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    //color: "#fff",
                    fontFamily: "Amaranth-Bold",
                    backgroundColor: "#FFA067",
                    textAlign: "center",
                    borderRadius: 15,
                    textAlignVertical: "center",
                    width: "97%",
                    height: "82%",
                    color: "#000000"
                  }}
                >
                  SIGN UP
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      );
    }
  }
}
AppRegistry.registerComponent("DisplayAnImage", () => DisplayAnImage);

const styles = StyleSheet.create({
  container: {
    flex: 1,

    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center"

    //width: '100%',
    // height: '100%',

    //backgroundColor: '#1803',
  },
  textinput: {
    borderBottomWidth: 1,
    borderColor: "#ACB4BE"
  },
  loginBtn: {
    height: "20%",
    width: "80%",
    backgroundColor: "#FFA067",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    //marginTop: 10,
    elevation: 1
  },
  SignUpBtn: {
    height: "20%",
    width: "80%",
    backgroundColor: "#FFA067",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 30,
    elevation: 1
  }
});
