
import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';

export default class MemberArea extends React.Component {
    render() {
        return (
            <View>
                <Text>You are logged in!</Text> 
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});