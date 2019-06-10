import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert
} from "react-native";
import React from "react";
import { LoginManager } from "react-native-fbsdk";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes
} from "react-native-google-signin";
import LinearGradient from "react-native-linear-gradient";

export default class Login extends React.Component {
  state = { username: "", password: "" };
  checkSignUp() {
    const { username, password } = this.state;
    if (username == "" && password == "") {
      //console.warn('login is correct')           /* this way to print on console */
      this.props.navigation.navigate("dashboard");
    } else {
      //console.warn('login is incorrect')         /* this way to print on console */
      Alert.alert("Error", "username/password mismatch", [
        {
          text: "Okey"
        }
      ]);
    }
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    //const data = await this.performTimeConsumingTask();
    GoogleSignin.configure();
    //if (data !== null) {
    // this.setState({ isLoading: false });
    // }
  }
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
  render() {
    return (
      <ImageBackground
        source={require("../static/img/bg1.png")}
        style={styles.container}
      >
        <Image
          style={{ flex: 1, resizeMode: "contain" }}
          source={require("../static/img/loggo.png")}
        />
        <View
          style={{
            // flexDirection: "row",
            flex: 1,
            backgroundColor: "#F7F7F7",
            width: "50%",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 100
          }}
        >
          <LinearGradient
            colors={["#489FCC", "#FFA067", "#50256F", "#50256F"]}
            start={{ x: 0.0, y: 1.0 }}
            end={{ x: 1.0, y: 1.0 }}
            style={{
              width: "94%",
              height: "90%",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 100
            }}
          >
            <View
              style={{
                backgroundColor: "#F7F7F7",
                width: "92%",
                height: "90%",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 100
              }}
            >
              <Text
                style={{
                  fontFamily: "Amaranth-Bold",
                  color: "#50256F",
                  fontSize: 35
                }}
              >
                LOG IN
              </Text>
            </View>
          </LinearGradient>
        </View>

        <View
          style={{
            flex: 2,
            width: "90%",
            marginTop: 15,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TextInput
            placeholder="username"
            placeholderTextColor="#F7F7F7"
            style={{
              height: 45,
              borderBottomWidth: 1,
              borderColor: "#FFA067",

              width: "90%"
            }}
            onChangeText={text => this.setState({ username: text })}
          />
          <TextInput
            placeholder="password"
            placeholderTextColor="#F7F7F7"
            secureTextEntry={true}
            style={{
              height: 45,
              borderBottomWidth: 1,
              borderColor: "#FFA067",
              width: "90%"
            }}
            onChangeText={text => this.setState({ password: text })}
          />

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => this.checkSignUp()}
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
                  //color: "#F7F7F7",
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
                SUBMIT
              </Text>
            </LinearGradient>
          </TouchableOpacity>
          <Text
            style={{ textAlign: "center", marginTop: 20, color: "#F7F7F7" }}
          >
            Forgot Password?
          </Text>
        </View>

        <View style={{ flex: 2 }}>
          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "#2980b9",
              width: "60%",
              height: 40,
              marginBottom: 10
            }}
            onPress={this.fbLogin}
          >
            <Text
              style={{
                color: "blue",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center"
              }}
            >
              <Image
                style={{ height: 30 }}
                source={require("../static/img/g.png")}
              />
              <Text style={{ lineHeight: 25 }}>Login with facebook</Text>
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderWidth: 2,
              borderColor: "#2980b9",
              width: "60%",
              height: 40,
              marginBottom: 10
            }}
            onPress={this.googleSignIn}
          >
            <Text
              style={{
                color: "blue",
                alignItems: "center",
                justifyContent: "space-between",
                textAlign: "center"
              }}
            >
              <Image
                style={{ height: 30 }}
                source={require("../static/img/g.png")}
              />
              <Text style={{ lineHeight: 25 }}>Login with gmail</Text>
            </Text>
          </TouchableOpacity>
          <Text style={{ color: "#F7F7F7" }}>No Account?Sign Up</Text>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "contain"
    // backgroundColor: "#fff",
    //padding: 20
  },
  iconView: {
    flex: 2
    //   marginTop:100
  },

  btnView: {
    flex: 4,
    justifyContent: "space-evenly",
    alignItems: "flex-end"
  },

  loginBtn: {
    // height: 55,
    // width: "100%",
    // backgroundColor: "#518EF8",
    // justifyContent: "center",
    // alignItems: "center",
    // borderRadius: 2,
    // elevation: 1,
    // marginTop: 10
    height: "20%",
    width: "80%",
    backgroundColor: "#FFA067",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 10,
    elevation: 1
  }
});
