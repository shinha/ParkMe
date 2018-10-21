import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ParkMe from './src/ParkMe.js';
import Login from './src/components/Login.js';
import LoginScreen from './src/components/LoginScreen.js';
import SignupScreen from './src/components/SignupScreen.js';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen.js';
import MemberArea from './src/components/MemberArea.js';

//import { Font, AppLoading } from 'expo';
import Expo from 'expo';

import firebase from 'firebase';

export default class App extends React.Component {

  async componentWillMount(){ //Needed to load fonts before trying to use them
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    this.setState({ loading: false });
  }

  constructor(props){ //set initial state 'loading'
    super(props);
    this.state = {
      loading: true
    }
  }

  render() {
    if (this.state.loading){
      return <Expo.AppLoading/>  
    }
    return (
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Login: LoginScreen,
  Signup: SignupScreen,
  Main: MemberArea,
  Forgot: ForgotPasswordScreen
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
