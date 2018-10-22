import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen.js';
import SignupScreen from './src/components/SignupScreen.js';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen.js';
import MemberArea from './src/components/MemberArea.js';

//import { Font, AppLoading } from 'expo';
import Expo from 'expo';

import firebase from 'firebase';

export default class App extends React.Component {
    //link database connection
    //componentWillMount() {
        
    //}
    //end dblink

  async componentWillMount(){ //Needed to load fonts before trying to use them
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });

    const config = {
      apiKey: 'AIzaSyAW-h6g7oCGa5Ssq8ng4P-O4Vbjpt_KzzE',
      authDomain: 'parkmedatabase.firebaseapp.com',
      databaseURL: 'https://parkmedatabase.firebaseio.com',
      projectId: 'parkmedatabase',
      storageBucket: '',
      messagingSenderId: '501815554205',
    };
    firebase.initializeApp(config);

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
    Forgot: ForgotPasswordScreen,
});

