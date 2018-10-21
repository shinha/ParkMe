import React from 'react';
import { StyleSheet, View, TextInput, Alert } from 'react-native';
import {
    Container,
    Button,
    Text,
    Header,
    Left,
    Body,
    Right,
    Icon,
    Title,
    StyleProvider,
    Content,
    Grid,
    Col,
    Row,
    Input,
    Item,
    Form,
    Label,
    Footer,
    FooterTab,
    Spinner
  } from "native-base";
import * as firebase from 'firebase';

export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    render() {
        const { email, password } = this.state;

        return (
            <Container>

                <Text>Park.Me</Text> 

                <TextInput
                    style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={email}
                    onChangeText={text => {
                        this.setState({ email: text });
                    }}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <TextInput
                    style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={password}
                    onChangeText={text => {
                        this.setState({ password: text });
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                
                <Button transparent rounded block onPress={this.onLoginPress} >
                    <Text>Login</Text> 
                </Button>

                <Button transparent rounded block onPress={()=>this.props.navigation.navigate('Signup')} >
                    <Text>Create Account</Text> 
                </Button>

                <Button transparent rounded block onPress={()=>this.props.navigation.navigate('Forgot')} >
                    <Text>Forgot Password</Text> 
                </Button>

                <Button transparent rounded block onPress={()=>this.props.navigation.navigate('Main')} >
                    <Text>Continue without account</Text> 
                </Button>

            </Container>
        );
    }

    onLoginPress = () => {
        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(
                () => {
                    this.props.navigation.navigate('Main');
                },
                error => {
                    Alert.alert(error.message);
                }
            );

        this.setState({ email: '', password: '' });
    };
}
