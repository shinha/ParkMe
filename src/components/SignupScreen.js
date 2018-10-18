import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class SignupScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordConfirm: '',
        };
    }

    render() {
        const { email, password, passwordConfirm } = this.state;

        return (
            <View style={{ paddingTop: 50, alignItems: 'center' }}>
                <Text>Signup</Text>

                <View style={{ paddingTop: 10 }} />

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

                <TextInput
                    style={{ width: 200, height: 40, borderWidth: 1 }}
                    value={passwordConfirm}
                    onChangeText={text => {
                        this.setState({ passwordConfirm: text });
                    }}
                    placeholder="Password (confirm)"
                    secureTextEntry={true}
                    autoCapitalize="none"
                    autoCorrect={false}
                />

                <View style={{ paddingTop: 10 }} />

                <Button title="Signup" onPress={this.onSignupPress} />

                <View style={{ paddingTop: 10 }} />

                <Button
                    title="Back to Login"
                    onPress={this.onBackToLoginPress}
                />
            </View>
        );
    }

    onSignupPress = () => {
        if (this.state.password !== this.state.passwordConfirm) {
            Alert.alert('Passwords do not match');
            this.setState({ password: '', passwordConfirm: '' });
            return;
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            )
            .then(
                () => {
                    Alert.alert('User created!');
                },
                error => {
                    Alert.alert(error.message);
                }
            );
    };

    onBackToLoginPress = () => {
        this.props.navigation.navigate('Login');
    };
}
