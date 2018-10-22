import React from 'react';
import { StyleSheet, View, TextInput, Alert, ImageBackground } from 'react-native';
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
    Image,
    Item,
    Form,
    Label,
    Footer,
    FooterTab,
    Spinner
  } from "native-base";
import * as firebase from 'firebase';

const styles = StyleSheet.create({
   container:{
       width:'100%',
       height: '100%',
       backgroundColor: '#f7f7f73d'
   },
   textboxStyle:{  
       backgroundColor: '#ffffff42',
       padding: 4,
       marginBottom: 16
   }
});


export default class LoginScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    static navigationOptions = {
        header: null,
    };

    

    render() {
        const { email, password } = this.state;

        return (
            <ImageBackground source = {require('../img/gradient2.png')} style={{flex:1, width:'100%', alignItems:'center', justifyContent:'center'}}>
            <Container style={styles.container}>
                

                <Text 
                    style={{
                        fontSize: 40, 
                        color: '#FFF', 
                        textAlign: 'center',
                        marginBottom: 176,
                        marginTop: 56
                    }} 
                >
                    Park.Me
                </Text> 

                <Content padder>

                    <Item rounded style={styles.textboxStyle} >
                        <Icon name='person' />
                        <Input 
                            placeholder = 'Username or Email' 
                            placeholderTextColor='#FFF' 
                            style={styles.textboxStyle} 
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={{color:'#FFF'}} 
                            autoCorrect={false}
                            value={email}
                            onChangeText={text => {this.setState({ email: text });}}
                        />
                    </Item>
                    <Item rounded style={styles.textboxStyle} >
                        <Icon name='lock' />
                        <Input 
                            secureTextEntry={true} 
                            placeholder = 'Password' 
                            placeholderTextColor='#FFF' 
                            style={{color:'#FFF'}} 
                        />
                    </Item>

                    <Button 
                        style={{padding: 4, marginBottom: 8}}
                        bordered 
                        rounded 
                        block 
                        light 
                        onPress={this.onLoginPress} 
                    >
                        <Text>Login</Text> 
                    </Button>
                    <Grid style={{marginBottom: 8}}>
                        <Left>
                            <Button transparent rounded small light onPress={()=>this.props.navigation.navigate('Signup')} >
                                <Text>Create Account</Text> 
                            </Button>
                        </Left>
                        <Right>
                            <Button transparent rounded small light onPress={()=>this.props.navigation.navigate('Forgot')} >
                                <Text>Forgot Password</Text> 
                            </Button>
                        </Right>
                    </Grid>


                    <Button 
                        bordered 
                        rounded 
                        block 
                        light 
                        onPress={()=>this.props.navigation.navigate('Main')} 
                    >
                        <Text>Continue without account</Text> 
                    </Button>
                </Content>
                
            </Container></ImageBackground>
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
