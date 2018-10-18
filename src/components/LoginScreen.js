import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
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
            <View style={{ paddingTop: 50, alignItems: 'center' }}>
                <Text>Login</Text>

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

                <View style={{ paddingTop: 10 }} />

                <Button title="Login" onPress={this.onLoginPress} />

                <View style={{ paddingTop: 10 }} />

                <Button
                    title="Create account..."
                    onPress={() => this.props.navigation.navigate('Signup')}
                />

                <View style={{ paddingTop: 10 }} />

                <Button
                    title="Forgot Password..."
                    onPress={() => this.props.navigation.navigate('Forgot')}
                />
            </View>
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
