import React, { Component } from "react";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import {Avatar, Text} from 'react-native-elements';

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
                //  TODO: change to user google photo
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
                activeOpacity={0.75}
            />
            <Text style={styles.SettingsTitle}>
                {/* TODO: change to user name */}
                First Last
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
                            // change to logged in username
                            placeholder='First'
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
                            // change to logged in username
                            placeholder='Last'
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
                            placeholder='user@gmail.com'
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

            <View style={styles.ProfileSub}>
                <Text style={styles.EditProfileLabel}>
                        Username
                </Text>
                <Content contentContainerStyle={{flexDirection: "column", alignItems:"center",paddingLeft: 12,paddingRight: 12}}>
                    <InputGroup>
                        <Input
                            // change to logged in username
                            placeholder='username'
                            placeholderTextColor={colorPalette.primaryText}
                            autoCapitalize="none"
                            autoCorrect={false}
                            keyboardType='default'
                            style={colorStyles.primaryText}
                            // TODO: Create update function to change username in FireBase
                            // onChangeText={(email) => {this.updateusername(email);}}
                        />
                    </InputGroup>
                </Content>
            </View>

            {/* TODO: Logout User */}
        <Button
            transparent
            style={{alignContent: 'center', justifyContent: 'center'}}>
                <Text h4 style={styles.SettingsButtons}> Save</Text>
        </Button>
          </View>
        
      </Container>
    );
  }
}