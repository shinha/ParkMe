import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import * as firebase from 'firebase';
import { MapView, Constants, Location, Permissions } from 'expo';

export default class MemberArea extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            locationResult: null,
        };
    }
    componentDidMount() {
        this._getLocationAsync();
    }
    render() {
        return (
            <MapView
                style={{ styles }}
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
