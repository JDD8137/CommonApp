import React, { Component } from "react";
import { styles } from '../styles/styles'
import { colorStyles, colorPalette } from "../styles/colorStyles"
import {Avatar, Text} from 'react-native-elements';

import {
    Button,
    Container, DatePicker, Form,
    Icon, Input, Item, Label,
    View,
} from 'native-base';
import {requestPayment} from "../api/mobileMoney";
import {Database} from "../models/Database";
import {Alert} from "react-native";

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: ""
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
        title:"Payment"
        // headerLeft:
        //   <HeaderBarItem to='Home' title='User Profile' />
        // headerRight:
        //   <HeaderBarItem to='FeedbackScreen' title='Feedback' />
    });

    apply() {
        if (this.state.id.length != 10 || !/^\d+$/.test(this.state.id)) {
            Alert.alert("Please enter a valid, 10 digit phone number.");
        } else {
            const university = this.props.navigation.getParam("university");
            requestPayment(this.state.id, "Payment to " + university.name, "49.99",`${Math.floor(Math.random * 99999999)}`).then(() => {
                Database.applyTo(university.id);
                Alert.alert(`Successfully Applied to ${university.name}!`, "Your application has been successfully submitted, pending fee payment through your Mobile Money account.")
                this.props.navigation.navigate("Search");
            }).catch(error => {
                console.log(error);
            })
        }

    }
    render() {
        const university = this.props.navigation.getParam("university");
        const { navigate } = this.props.navigation;
        return (
            <Container style={{...colorStyles.primary, backgroundColor: "white"}}>
                <View style={{margin:20, fontSize:15}}>
                    <Text>{university.name} charges an application fee of <Text style={{fontWeight: "bold"}}>$49.99</Text>.
                        In order to complete your application, please enter your Mobile Money ID (phone number) and click Pay.</Text>
                </View>

                <Form>
                    <Item inlineLabel>
                        <Label>Mobile Money ID</Label>
                        <Input placeholder="0000000000" style={{ textAlign: 'right' }} value={this.state.id} onChangeText={(value) => {this.setState({id: value})}}/>
                    </Item>
                    <Button full style={{borderWidth: 2, borderColor: 'lightgrey', borderRadius:15,  margin:20}} onPress={() => {this.apply()}}>
                        <Text>Pay Fee and Submit Application</Text>
                    </Button>
                </Form>
            </Container>
        );
    }

}