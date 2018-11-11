import React, { Component } from "react";
import {
    View,
    Text,
    ScrollView,
    Alert
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
import { Database } from "../models/Database";

export default class EditApplication extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applicant: {},
            application: {},
            page: 1,
            affirmationChecked: false,
            signature: ""
        };
        this.state.applicant = new Applicant();
        this.state.application = new Application();
        Database.loadApplication().then((result) => {
            this.setState({
                applicant: result[0],
                application: result[1]
            })
        })
    }

    renderHeader() {
        return(
            <Header>
                <Left>
                    <Button transparent onPress={ () => {this.props.navigation.goBack()}} >
                        <Text>Close</Text>
                    </Button>
                </Left>
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
                        <ProgressBar progress={this.state.page / 7} width={200}/>
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
                <View style={{flex: 1, flexDirection:"column", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={{fontSize: 20, textAlign: "center", margin:20}}>Welcome to your Common Application!</Text>
                    <Text style={{fontSize: 14, textAlign: "center", margin:20}}>This application will be sent to all universities that you choose to apply to. Click next to begin.</Text>

                </View>
            );
        } else if (number == 2) {
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
        } else if (number == 3) {
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
        } else if (number == 4) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>Examining Authority:</Label>
                        <Input placeholder="Authority" style={{ textAlign: 'right' }} value={this.state.application.examiningAuthority} onChangeText={(value) => {this.setState({application: { ...this.state.application, examiningAuthority: value}})}}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Scores:</Label>
                        <Textarea rowSpan={5} bordered placeholder="Enter Scores (with subject if applicable)" width={300} style={{marginTop: 15, marginBottom: 15}}
                                  value={this.state.application.examScore}
                                  onChangeText={(value) => {this.setState({application: { ...this.state.application, examScore: value}})}}/>
                    </Item>
                </Form>
            )
        } else if (number == 5) {
            return (
                <Form>
                    <Item picker inlineLabel>
                        <Label>First Choice Degree:</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder="Choose Major"
                            selectedValue={this.state.application.firstDegreeChoice}
                            onValueChange={(value) => {this.setState({application: { ...this.state.application, firstDegreeChoice: value}})}}
                        >
                            <Picker.Item label="Arts and Humanaties" value="Arts and Humanaties" />
                            <Picker.Item label="Business and Social Sciences" value="Business and Social Sciences" />
                            <Picker.Item label="Medicine and Health" value="Medicine and Health" />
                            <Picker.Item label="Engineering" value="Engineering" />
                            <Picker.Item label="Science and Technology" value="Science and Technology" />
                        </Picker>
                    </Item>
                    <Item stackedLabel>
                        <Label>Explain your first choice</Label>
                        <Textarea rowSpan={5} bordered placeholder="Explanation" width={300} style={{marginTop: 15, marginBottom: 15}}
                                  value={this.state.application.firstDegreeExplanation}
                                  onChangeText={(value) => {this.setState({application: { ...this.state.application, firstDegreeExplanation: value}})}}/>
                    </Item>
                    <Item picker inlineLabel>
                        <Label>Second Choice Degree:</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder="Choose Major"
                            selectedValue={this.state.application.secondDegreeChoice}
                            onValueChange={(value) => {this.setState({application: { ...this.state.application, secondDegreeChoice: value}})}}
                        >
                            <Picker.Item label="Arts and Humanaties" value="Arts and Humanaties" />
                            <Picker.Item label="Business and Social Sciences" value="Business and Social Sciences" />
                            <Picker.Item label="Medicine and Health" value="Medicine and Health" />
                            <Picker.Item label="Engineering" value="Engineering" />
                            <Picker.Item label="Science and Technology" value="Science and Technology" />
                        </Picker>
                    </Item>
                    <Item stackedLabel>
                        <Label>Explain your first choice</Label>
                        <Textarea rowSpan={5} bordered placeholder="Explanation" width={300} style={{marginTop: 15, marginBottom: 15}}
                                  value={this.state.application.secondDegreeExplanation}
                                  onChangeText={(value) => {this.setState({application: { ...this.state.application, secondDegreeExplanation: value}})}}/>
                    </Item>
                </Form>
            )
        } else if (number == 6) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>Recommender Name:</Label>
                        <Input placeholder="Name" style={{ textAlign: 'right' }} value={this.state.application.recommenderName} onChangeText={(value) => {this.setState({application: { ...this.state.application, recommenderName: value}})}}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>Recommendation Letter:</Label>
                        <Textarea rowSpan={5} bordered placeholder="Type or paste letter" width={300} style={{marginTop: 15, marginBottom: 15}}
                                  value={this.state.application.recommendation}
                                  onChangeText={(value) => {this.setState({application: { ...this.state.application, recommendation: value}})}}/>
                    </Item>
                </Form>
            );
        } else if (number == 7) {
            return (
                <View style={{flex: 1, flexDirection:"column", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={{fontSize: 20, textAlign: "center"}}>I affirm that all the information I have provided is true to the best of my knowledge.</Text>
                    <CheckBox checked={this.state.affirmationChecked} style={{marginTop: 10}} onPress={() => {this.setState({affirmationChecked: !this.state.affirmationChecked})}}/>
                    <Label style={{marginTop: 20}}>Signature (Full Legal Name):</Label>
                    <Input bordered placeholder="Name" style={{borderWidth: 2, borderColor: 'lightgrey', borderRadius:15, width: 300, marginTop:5}} value={this.state.signature} onChangeText={(value) => {this.setState({signature: value})}}/>
                    {this.renderButton(this.state.affirmationChecked, this.state.signature)}
                </View>
            )
        }
    }

    renderFooter(number) {
        if (number > 1 && number < 7) {
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

    renderButton(checked, signature) {
        if (checked && signature != "") {
            return (
                <Button full style={{borderWidth: 2, borderColor: 'lightgrey', borderRadius:15, marginTop:5}} onPress={() => {this.submitApplication()}}>
                    <Text>Save</Text>
                </Button>
            )
        } else {
            return (
                <Button full disabled style={{borderWidth: 2, borderColor: 'lightgrey', borderRadius:15, marginTop:5}}>
                    <Text>Save</Text>
                </Button>
            )
        }
    }

    submitApplication() {
        Database.createApplication(new Applicant(this.state.applicant), new Application(this.state.application)).then(() => {
            Alert.alert("Successfully Saved");
            this.props.navigation.goBack()
        }).catch((e) => {
            Alert.alert("Error Saving Application", e);
        })
    }
}