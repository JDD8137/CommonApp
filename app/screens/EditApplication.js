import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView
} from "react-native";
import {
    Container,
    Header,
    Body,
    Left,
    Right,
    Label,
    Form,
    Item,
    Input,
    DatePicker,
    Footer,
    Content,
    Button,
    Icon,
    Picker,
    Textarea,
    CheckBox
} from 'native-base'

import ProgressBar from 'react-native-progress/Bar';
import Applicant from "../models/Applicant";
import Application from "../models/Application";

export default class EditApplication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applicant: {},
            application: {},
            page: 1
        };
        this.state.applicant = new Applicant();
        this.state.application = new Application();
    }

    renderHeader() {
        return(
            <Header>
                <Left />
                <Body>
                <Text>Edit Application</Text>
                </Body>
                <Right>
                </Right>
            </Header>
        );
    }

    render() {
        return(
            <Container>
                {this.renderHeader()}
                <Content>
                    <View style={{flex: 0, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                        <ProgressBar progress={this.state.page / 6} width={200}/>
                    </View>
                    <ScrollView style={{padding: 10}}>
                        {this.renderPage(this.state.page)}
                    </ScrollView>
                </Content>
                {this.renderFooter(this.state.page)}
            </Container>
        );
    }

    renderPage(number) {
        if (number == 1) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>First Name</Label>
                        <Input placeholder="First Name" style={{ textAlign: 'right' }} value={this.state.applicant.firstName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, firstName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>Middle Name</Label>
                        <Input placeholder="Middle Name" style={{ textAlign: 'right' }} value={this.state.applicant.middleName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, middleName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>Last Name</Label>
                        <Input placeholder="Last Name" style={{ textAlign: 'right' }} value={this.state.applicant.lastName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, lastName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>Date of Birth</Label>
                        <DatePicker
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.applicant.dateOfBirth == "" ? "Select date" : null}
                            formatChosenDate={date => {return date.toString().substr(4, 12);}}
                            defaultDate={new Date(this.state.applicant.dateOfBirth)}
                            onDateChange={(date) => {this.setState({applicant: {...this.state.applicant, dateOfBirth: date.toString()}})}}
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>Nationality</Label>
                        <Input placeholder="Nationality" style={{ textAlign: 'right' }} value={this.state.applicant.nationality} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, nationality: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>National ID #</Label>
                        <Input placeholder="ID #" style={{ textAlign: 'right' }} value={this.state.applicant.nationalId} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, nationalId: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>Mailing Address</Label>
                        <Input placeholder="Address" style={{ textAlign: 'right' }} value={this.state.applicant.mailingAddress} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, mailingAddress: value}})}}/>
                    </Item>
                </Form>
            )
        } else if (number == 2) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>High School Name</Label>
                        <Input placeholder="School Name" style={{ textAlign: 'right' }} value={this.state.applicant.schoolName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, schoolName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>Date started High School</Label>
                        <DatePicker
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.applicant.dateStartedHighSchool == "" ? "Select date" : null}
                            formatChosenDate={date => {return date.toString().substr(4, 12);}}
                            defaultDate={new Date(this.state.applicant.dateStartedHighSchool)}
                            onDateChange={(date) => {this.setState({applicant: {...this.state.applicant, dateStartedHighSchool: date.toString()}})}}
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>Date graduated High School</Label>
                        <DatePicker
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.applicant.dateGraduatedHighSchool == "" ? "Select date" : null}
                            formatChosenDate={date => {return date.toString().substr(4, 12);}}
                            defaultDate={new Date(this.state.applicant.dateGraduatedHighSchool)}
                            onDateChange={(date) => {this.setState({applicant: {...this.state.applicant, dateGraduatedHighSchool: date.toString()}})}}
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>GPA</Label>
                        <Input placeholder="GPA" style={{ textAlign: 'right' }} keyboardType="number-pad" value={this.state.applicant.gpa} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, gpa: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>High School Address</Label>
                        <Input placeholder="School Address" style={{ textAlign: 'right' }} value={this.state.applicant.schoolAddress} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, schoolAddress: value}})}}/>
                    </Item>
                </Form>
            )
        } else if (number == 3) {
            return (
                <Text>Put exams here</Text>
            )
        } else if (number == 4) {
            return (
                <Form>
                    <Item picker inlineLabel>
                        <Label>First Choice Degree:</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder="Choose Major"
                            selectedValue={null}
                            onValueChange={null}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </Item>
                    <Item stackedLabel>
                        <Label>Explain your first choice</Label>
                        <Textarea rowSpan={5} bordered placeholder="Explanation" width={300} style={{marginTop: 15, marginBottom: 15}}/>
                    </Item>
                    <Item picker inlineLabel>
                        <Label>Second Choice Degree:</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder="Choose Major"
                            selectedValue={null}
                            onValueChange={null}
                        >
                            <Picker.Item label="Wallet" value="key0" />
                            <Picker.Item label="ATM Card" value="key1" />
                            <Picker.Item label="Debit Card" value="key2" />
                            <Picker.Item label="Credit Card" value="key3" />
                            <Picker.Item label="Net Banking" value="key4" />
                        </Picker>
                    </Item>
                    <Item stackedLabel>
                        <Label>Explain your first choice</Label>
                        <Textarea rowSpan={5} bordered placeholder="Explanation" width={300} style={{marginTop: 15, marginBottom: 15}}/>
                    </Item>
                </Form>
            )
        } else if (number == 5) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>Recommender Name:</Label>
                        <Input placeholder="Name" style={{ textAlign: 'right' }}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Recommendation Letter:</Label>
                        <Textarea rowSpan={5} bordered placeholder="Type or paste letter" width={300} style={{marginTop: 15, marginBottom: 15}}/>
                    </Item>
                </Form>
            );
        } else if (number == 6) {
            return (
                <View style={{flex: 1, flexDirection:"column", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={{fontSize: 20, textAlign: "center"}}>I affirm that all the information I have provided is true to the best of my knowledge.</Text>
                    <CheckBox checked={false} style={{marginTop: 10}}/>
                    <Label style={{marginTop: 20}}>Signature (Full Legal Name):</Label>
                    <Input bordered placeholder="Name" style={{borderWidth: 2, borderColor: 'lightgrey', borderRadius:15, width: 300, marginTop:5}}/>
                </View>
            )
        }
    }

    renderFooter(number) {
        if (number > 1 && number < 6) {
            return (
                <Footer>
                    <Left>
                        <Button transparent onPress={ () => {this.setState({page: this.state.page - 1})}}>
                            <Text style={{marginLeft: 10}}>Previous</Text>
                        </Button>
                    </Left>
                    <Body />
                    <Right>
                        <Button transparent onPress={ () => {this.setState({page: this.state.page + 1})}}>
                            <Text style={{marginRight: 10}}>Next</Text>
                        </Button>
                    </Right>
                </Footer>
            )
        } else if (number == 1) {
            return (
                <Footer>
                    <Left />
                    <Body />
                    <Right>
                        <Button transparent onPress={ () => {this.setState({page: this.state.page + 1})}}>
                            <Text style={{marginRight: 10}}>Next</Text>
                        </Button>
                    </Right>
                </Footer>
            );
        } else {
            return (
                <Footer>
                    <Left>
                        <Button transparent onPress={ () => {this.setState({page: this.state.page - 1})}}>
                            <Text style={{marginLeft: 10}}>Previous</Text>
                        </Button>
                    </Left>
                    <Body />
                    <Right />
                </Footer>
            );
        }
    }
}