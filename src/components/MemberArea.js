import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';
import MapView from 'react-native-maps';
import * as firebase from 'firebase';
import { MapView } from 'expo';

export default class MemberArea extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={styles.container}>
                
                <MapView style={styles.map}
                    region={{
                        latitude: 33.767649,
                        longitude: -118.188240,
                        latitudeDelta: 0.1,
                        longitudeDelta: 0.1
                    }}>
                </MapView>
            </View>
            
            
        );
    }
}

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
        /**flex:1,
        alignItems: 'center',
        justifyContent: 'center'*/
    },
    maps: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0 
    }
});
