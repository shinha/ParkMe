import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import ParkMe from './src/ParkMe.js';
import Login from './src/components/Login.js';
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
