import React, { Component } from "react";
import {
  Button,
  Container,
  Content,
  Footer,
  InputGroup,
  Input,
  Icon,
  Spinner,
  Text,
  View,
} from 'native-base'
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"


export default class Login extends Component {
  constructor(props) {
    super(props);
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
              placeholder='Email'
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
              placeholder='Password'
              placeholderTextColor={colorPalette.primaryText}
              secureTextEntry={true}
              autoCapitalize="none"
              style={colorStyles.primaryText}
              autoCorrect={false}
              onChangeText={(pass) => {this.updatePassword(pass)}}
            />
          </InputGroup>

          <Button block style={{marginTop:10}} onPress={() => this.props.navigation.navigate('HomeStack')}>
            <Text> Sign in </Text>
          </Button>

          <Text style={[colorStyles.primaryText, {textAlign:"center", marginTop:20}]} onPress={() => {navigate('Signup')}}>
            Don't have an account yet? <Text style={{color:"#4cb1ff"}}>Sign up!</Text>
          </Text>
          <Text style={{textAlign:"center", color:"#4cb1ff"}} onPress={() => {navigate('Signup')}}>
            Forgot Password?
          </Text>

          {/* TODO: FACEBOOK AUTH */}
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              {/* <Icon type="FontAwesome" name="facebook" size={12} /> */}
              <Text style={styles.facebookSignin}>
                Continue with Facebook
              </Text>
          </View>
          
          {/* TODO: GOOGLE AUTH */}
          <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
              {/* <Icon type="FontAwesome" name="google" size={12} /> */}
              <Text style={styles.googleSignin}>
                Continue with Google
              </Text>
          </View>
        </View>
      </Content>
    </Container>
    );
  }
}