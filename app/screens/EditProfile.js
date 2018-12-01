import React, { Component } from "react";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import {Avatar, Text} from 'react-native-elements';
import { Database } from "../models/Database"

import {
  Button,
  Container,
  Content,
  Footer,
  InputGroup,
  Input,
  Icon,
  Spinner,
  View,
} from 'native-base'


export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: Database.getUserName(),
        email: Database.getEmail(),
        pic: Database.getPhoto(),
        userName: Database.getUserId()
    }
  }

  static navigationOptions = () => ({
    headerStyle: {
      backgroundColor: colorPalette.primary,
      shadowRadius: 0,
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFFFFF',
    headerTitleStyle: {
      color: '#FFFFFF',
    },
    title: 'Edit Profile'
    // headerLeft:
    //   <HeaderBarItem to='Home' title='User Profile' />
    // headerRight:
    //   <HeaderBarItem to='FeedbackScreen' title='Feedback' />
  });


  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={colorStyles.primary}>

        <View style={[styles.AvatarContainer, styles.TitleHeader]}>
            <Avatar
                rounded
                size="large"
                source={{uri: this.state.pic}}
                activeOpacity={0.75}
            />
            <Text style={styles.SettingsTitle}>
                {this.state.name}
            </Text>
        </View>

        <View style={styles.EditProfileContainer}>
            <View style={styles.ProfileSub}>
                <Text style={styles.EditProfileLabel}>
                        First Name
                </Text>
                <Content contentContainerStyle={{flex:1, flexDirection: "column", alignItems:"center",paddingLeft: 12,paddingRight: 12,}}>
                    <InputGroup>
                        <Input
                            placeholder={this.state.name.substr(0, this.state.name.indexOf(' '))}
                            placeholderTextColor={colorPalette.primaryText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType='default'
                            style={colorStyles.primaryText}
                            // TODO: Create update function to change name in FireBase
                            // onChangeText={(email) => {this.updateName(email);}}
                        />
                    </InputGroup>
                </Content>
                
            </View>

            <View style={styles.ProfileSub}>
                <Text style={styles.EditProfileLabel}>
                        Last Name
                </Text>
                <Content contentContainerStyle={{flex:1, flexDirection: "column", alignItems:"center",paddingLeft: 12,paddingRight: 12,}}>
                    <InputGroup>
                        <Input
                            placeholder={this.state.name.substr(this.state.name.indexOf(' '), this.state.name.length - 1)}
                            placeholderTextColor={colorPalette.primaryText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType='default'
                            style={colorStyles.primaryText}
                            // TODO: Create update function to change name in FireBase
                            // onChangeText={(email) => {this.updateName(email);}}
                        />
                    </InputGroup>
                </Content>
            </View>

            <View style={styles.ProfileSub}>
                <Text style={styles.EditProfileLabel}>
                        Email
                </Text>
                <Content contentContainerStyle={{flex:1, flexDirection: "column", alignItems:"center",paddingLeft: 12,paddingRight: 12,}}>
                    <InputGroup>
                        <Input
                            // change to logged in email
                            placeholder={this.state.email}
                            placeholderTextColor={colorPalette.primaryText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType='email-address'
                            style={colorStyles.primaryText}
                            // TODO: Create update function to change name in FireBase
                            // onChangeText={(email) => {this.updateName(email);}}
                        />
                    </InputGroup>
                </Content>
            </View>


            {/* TODO: Logout User */}
        <Button
            transparent
            style={{alignContent: 'center', justifyContent: 'center', flex: 3}}>
                <Text h4 style={styles.SettingsButtons}> Save</Text>
        </Button>
          </View>
        
      </Container>
    );
  }
}