import React from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import { MapView } from 'expo';

export default class MemberArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <MapView
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        );
    }
}
