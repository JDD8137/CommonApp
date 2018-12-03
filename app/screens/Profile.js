import React, { Component } from "react";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import {Avatar, Text} from 'react-native-elements';
import { Database } from "../models/Database";
import { strings } from "../config/LanguageTranslations";

import {
  Button,
  Container,
  Icon,
  View,
} from 'native-base';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: Database.getUserName(),
        pic: Database.getPhoto()
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
                source={{uri: this.state.pic}}
                activeOpacity={0.75}
            />
            <Text style={styles.SettingsTitle}>
                {/* TODO: change to user name */}
                {this.state.name}
            </Text>
        </View>

        <View style={styles.SettingsContainer}>
            <View style={styles.SettingsRow}>
                <Button transparent onPress={() => this.props.navigation.navigate('EditProfile')}>
                    <Text h4 style={styles.SettingsButtons}> {strings.editProfile} </Text>
                </Button>
                <Icon
                    type='MaterialIcons'
                    name='person'
                    style={[colorStyles.primaryText, styles.SettingsIcon]}/>
            </View>

            <View style={{ height: 1, width: "92%", backgroundColor: "#CED0CE", marginLeft: "4%"}}/>

            <View style={styles.SettingsRow}>
                <Button transparent onPress={() => this.props.navigation.navigate('Notifications')}>
                    <Text h4 style={styles.SettingsButtons}> {strings.notifications} </Text>
                </Button>
                <Icon
                    type='MaterialIcons'
                    name='notifications-none'
                    style={[colorStyles.primaryText, styles.SettingsIcon]}/>
            </View>

            <View style={{ height: 1, width: "92%", backgroundColor: "#CED0CE", marginLeft: "4%"}}/>

            <View style={styles.SettingsRow}>
                <Button transparent onPress={() => this.props.navigation.navigate('PaymentOptions')}>
                    <Text h4 style={styles.SettingsButtons}> {strings.paymentOptions} </Text>
                </Button>
                <Icon
                    type='MaterialIcons'
                    name='payment'
                    style={[colorStyles.primaryText, styles.SettingsIcon]}/>
            </View> 
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingBottom: 60}}>
        
        {/* TODO: Logout User */}
        <Button transparent onPress={() => this.props.navigation.navigate('Login')}>
                    <Text h4 style={styles.SettingsButtons}> {strings.logout} </Text>
        </Button>
    </View>
        
      </Container>
    );
  }

}