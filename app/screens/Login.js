import React, { Component } from "react";
import {
  Button,
  Container,
  Content,
  InputGroup,
  Input,
  Icon,
  Text,
  View,
} from 'native-base'
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"

import {TouchableOpacity} from "react-native"

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken
} = FBSDK;

import { Alert } from 'react-native';
import { Authenticator } from '../models/Authenticator'
import { strings } from "../config/LanguageTranslations"


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    }

   // if (this.navigationOptions.logout) {
   //   Authenticator.logout();
   // } else {
        Authenticator.userIsLoggedIn((result) => {
            if (result) {
                this.props.navigation.navigate("Home");
            }
        });
   // }

  }

  updateEmail(email) {
    this.setState({email});
  }

  updatePassword(password) {
    this.setState({password});
  }

  login() {
    const { email, password } = this.state;
    this.state.disableAutoLogin = true;
    Authenticator.login(email, password)
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch(() => {
        Alert.alert(strings.invalidNamePwd);
      });

  }

  loginWithFacebook() {
    Authenticator.loginWithFacebook()
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch(() => {
        Alert.alert(strings.unableFBLogin);
      });
  }

  loginWithGoogle() {
    Authenticator.loginWithGoogle()
      .then(() => {
        this.props.navigation.navigate("Home");
      })
      .catch((error) => {
        console.log(error);
        Alert.alert(strings.unableGoogLogin);
      })
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={colorStyles.primary}>
        <Content contentContainerStyle={{flex:1, flexDirection: "column", justifyContent: "space-between", alignItems:"center",paddingLeft: 10,paddingRight: 10,}}>
          <View style={{alignSelf: "stretch", top: 250}}>
          <InputGroup>
            <Icon name="mail" style={colorStyles.primaryText} />
            <Input
              placeholder={strings.email}
              placeholderTextColor={colorPalette.primaryText}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              style={colorStyles.primaryText}
              onChangeText={(email) => {this.updateEmail(email);}}
            />
          </InputGroup>
          <InputGroup>
            <Icon name='lock' style={colorStyles.primaryText}/>
            <Input
              placeholder={strings.password}
              placeholderTextColor={colorPalette.primaryText}
              secureTextEntry={true}
              autoCapitalize="none"
              style={colorStyles.primaryText}
              autoCorrect={false}
              onChangeText={(pass) => {this.updatePassword(pass)}}
            />
          </InputGroup>

          <Button block style={{marginTop:10}} onPress={() => {this.login()}}>
            <Text> {strings.signIn}</Text>
          </Button>

          <Text style={[colorStyles.primaryText, {textAlign:"center", marginTop:20}]} onPress={() => {navigate('Signup')}}>
              {strings.noAccount} <Text style={{color:"#4cb1ff"}}>{strings.signUp}</Text>
          </Text>
          <Text style={{textAlign:"center", color:"#4cb1ff"}} onPress={() => {navigate('Signup')}}>
              {strings.forgotPassword}
          </Text>

          {/* TODO: FACEBOOK AUTH */}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              {/* <Icon type="FontAwesome" name="facebook" size={12} /> */}

              <TouchableOpacity onPress={() => {this.loginWithFacebook()}}>
                <Text style={styles.facebookSignin}>
                    {strings.continueFacebook}
              </Text>
              </TouchableOpacity>
          </View>

          {/* TODO: GOOGLE AUTH */}
          <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
              {/* <Icon type="FontAwesome" name="google" size={12} /> */}
              <TouchableOpacity onPress={() => {this.loginWithGoogle()}}>
                <Text style={styles.googleSignin}>
                    {strings.continueGoogle}
              </Text>
              </TouchableOpacity>

          </View>
        </View>
      </Content>
    </Container>
    );
  }
}