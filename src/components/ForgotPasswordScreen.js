import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { StackActions, NavigationActions } from 'react-navigation';
import * as firebase from 'firebase';

export default class ForgotPasswordScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
        };
    }

    render() {
        const { email } = this.state;

        return (
            <View style={{ paddingTop: 50, alignItems: 'center' }}>
                <Text>Forgot Password</Text>

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

                <View style={{ paddingTop: 10 }} />

                <Button
                    title="Reset Password"
                    onPress={() => this.onResetPasswordPress}
                />

                <View style={{ paddingTop: 10 }} />

                <Button
                    title="Back to Login..."
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }

    onResetPasswordPress = email => {
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(
                () => {
                    Alert.alert('Password reset email has been sent.');
                },
                error => {
                    Alert.alert(error.message);
                }
            );
    };
}
