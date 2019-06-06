import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
//import LoginPage from './app/sukiproject/components/LoginPage';
import {
  createStackNavigator,
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";
//import Home from './app/sukiproject/main/home';
import SignUp from "./app/sukiproject/components/SignUp";
import Dashboard from "./app/sukiproject/components/dashboard";
import SplashScreen from "./app/sukiproject/components/splash_screen";
import TimerGo from "./app/sukiproject/components/countdown";
import PlayGame from "./app/sukiproject/components/playgame";
//const InitialNavigator = createSwitchNavigator({
//Splash: SplashScreen,
//App: AppNavigator
//});
//export default createAppContainer(InitialNavigator);

// export default class App extends Component {
//   render() {
//     return (
//       <View>
//         <Text>sandeep!</Text>
//         <SplashScreen />
//       </View>
//     )
//   }
// }

const AppNavigator = createStackNavigator({
  SplashScreen: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },

  // Login: {
  //  screen: LoginPage,
  //   navigationOptions: {
  //    title:'Login'
  //   },
  //  },
  Sign: {
    screen: SignUp,
    navigationOptions: {
      title: "SignUp"
    }
  },
  dashboard: {
    screen: Dashboard,
    navigationOptions: {
      title: "Dashboard",
      headerLeft: null,
      headerTitleStyle: {
        alignSelf: "center"
      }
      //header:null
    }
  },
  countdown: {
    screen: TimerGo,
    navigationOptions: {
      header: null
    }
  },
  playgame: {
    screen: PlayGame,
    navigationOptions: {
      title: "PlayGame"
    }
  }

  // },{
  //   initialRoute:'Home'
});

export default createAppContainer(AppNavigator);
