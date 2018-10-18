import React from 'react';
import { createStackNavigator } from 'react-navigation';
import LoginScreen from './src/components/LoginScreen.js';
import SignupScreen from './src/components/SignupScreen.js';
import ForgotPasswordScreen from './src/components/ForgotPasswordScreen.js';
import MemberArea from './src/components/MemberArea.js';

import firebase from 'firebase';
//View can be thought of as divs
//StyleSheet similar to css

export default class App extends React.Component {
    //link database connection
    componentWillMount() {
        var config = {
            apiKey: 'AIzaSyAW-h6g7oCGa5Ssq8ng4P-O4Vbjpt_KzzE',
            authDomain: 'parkmedatabase.firebaseapp.com',
            databaseURL: 'https://parkmedatabase.firebaseio.com',
            projectId: 'parkmedatabase',
            storageBucket: '',
            messagingSenderId: '501815554205',
        };
        firebase.initializeApp(config);
    }
    //end dblink

    render() {
        return <AppStackNavigator />;
    }
}

const AppStackNavigator = createStackNavigator({
    Login: LoginScreen,
    Signup: SignupScreen,
    Main: MemberArea,
    Forgot: ForgotPasswordScreen,
});
