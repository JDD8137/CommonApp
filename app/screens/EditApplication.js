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
import {colorPalette} from "../styles/colorStyles";
import { strings } from "../config/LanguageTranslations"

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
        title: strings.editApplication
        // headerLeft:
        //   <HeaderBarItem to='Home' title='User Profile' />
        // headerRight:
        //   <HeaderBarItem to='FeedbackScreen' title='Feedback' />
    });


    renderHeader() {
        /*return(
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
        );*/
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
                    <Text style={{fontSize: 20, textAlign: "center", margin:20}}>{strings.welcomeToCommonApp}</Text>
                    <Text style={{fontSize: 14, textAlign: "center", margin:20}}>{strings.welcomeSubtext}</Text>

                </View>
            );
        } else if (number == 2) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>{strings.firstName}</Label>
                        <Input placeholder={strings.firstName} style={{ textAlign: 'right' }} value={this.state.applicant.firstName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, firstName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.middleName}</Label>
                        <Input placeholder={strings.middleName} style={{ textAlign: 'right' }} value={this.state.applicant.middleName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, middleName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.lastName}</Label>
                        <Input placeholder={strings.lastName} style={{ textAlign: 'right' }} value={this.state.applicant.lastName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, lastName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.dateOfBirth}</Label>
                        <DatePicker
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.applicant.dateOfBirth == "" ? strings.selectDate : null}
                            formatChosenDate={date => {return date.toString().substr(4, 12);}}
                            defaultDate={new Date(this.state.applicant.dateOfBirth)}
                            onDateChange={(date) => {this.setState({applicant: {...this.state.applicant, dateOfBirth: date.toString()}})}}
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.nationality}</Label>
                        <Input placeholder={strings.nationality} style={{ textAlign: 'right' }} value={this.state.applicant.nationality} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, nationality: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.nationalId}</Label>
                        <Input placeholder="#" style={{ textAlign: 'right' }} value={this.state.applicant.nationalId} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, nationalId: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.mailingAddress}</Label>
                        <Input placeholder={strings.mailingAddress} style={{ textAlign: 'right' }} value={this.state.applicant.mailingAddress} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, mailingAddress: value}})}}/>
                    </Item>
                </Form>
            )
        } else if (number == 3) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>{strings.highschool}</Label>
                        <Input placeholder={strings.highschool} style={{ textAlign: 'right' }} value={this.state.applicant.schoolName} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, schoolName: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.hsStartDate}</Label>
                        <DatePicker
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.applicant.dateStartedHighSchool == "" ? strings.selectDate : null}
                            formatChosenDate={date => {return date.toString().substr(4, 12);}}
                            defaultDate={new Date(this.state.applicant.dateStartedHighSchool)}
                            onDateChange={(date) => {this.setState({applicant: {...this.state.applicant, dateStartedHighSchool: date.toString()}})}}
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.hsGradDate}</Label>
                        <DatePicker
                            locale={"en"}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={this.state.applicant.dateGraduatedHighSchool == "" ? strings.selectDate : null}
                            formatChosenDate={date => {return date.toString().substr(4, 12);}}
                            defaultDate={new Date(this.state.applicant.dateGraduatedHighSchool)}
                            onDateChange={(date) => {this.setState({applicant: {...this.state.applicant, dateGraduatedHighSchool: date.toString()}})}}
                        />
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.gpa}</Label>
                        <Input placeholder={strings.gpa} style={{ textAlign: 'right' }} keyboardType="number-pad" value={this.state.applicant.gpa} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, gpa: value}})}}/>
                    </Item>
                    <Item inlineLabel>
                        <Label>{strings.hsAddress}</Label>
                        <Input placeholder={strings.hsAddress} style={{ textAlign: 'right' }} value={this.state.applicant.schoolAddress} onChangeText={(value) => {this.setState({applicant: { ...this.state.applicant, schoolAddress: value}})}}/>
                    </Item>
                </Form>
            )
        } else if (number == 4) {
            return (
                <Form>
                    <Item inlineLabel>
                        <Label>{strings.examiner}:</Label>
                        <Input placeholder={strings.examiner} style={{ textAlign: 'right' }} value={this.state.application.examiningAuthority} onChangeText={(value) => {this.setState({application: { ...this.state.application, examiningAuthority: value}})}}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>{strings.scores}:</Label>
                        <Textarea rowSpan={5} bordered placeholder={strings.enterScores} width={300} style={{marginTop: 15, marginBottom: 15}}
                                  value={this.state.application.examScore}
                                  onChangeText={(value) => {this.setState({application: { ...this.state.application, examScore: value}})}}/>
                    </Item>
                </Form>
            )
        } else if (number == 5) {
            return (
                <Form>
                    <Item picker inlineLabel>
                        <Label>{strings.firstDegreeChoice}:</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder={strings.selectMajor}
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
                        <Label>{strings.explainFirstChoice}</Label>
                        <Textarea rowSpan={5} bordered placeholder="Explanation" width={300} style={{marginTop: 15, marginBottom: 15}}
                                  value={this.state.application.firstDegreeExplanation}
                                  onChangeText={(value) => {this.setState({application: { ...this.state.application, firstDegreeExplanation: value}})}}/>
                    </Item>
                    <Item picker inlineLabel>
                        <Label>{strings.secondDegreeChoice}:</Label>
                        <Picker
                            mode="dropdown"
                            iosIcon={<Icon name="ios-arrow-down-outline" />}
                            style={{ width: undefined }}
                            placeholder={strings.selectMajor}
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
                        <Label>{strings.explainFirstChoice}</Label>
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
                        <Label>{strings.recommenderName}:</Label>
                        <Input placeholder={strings.name} style={{ textAlign: 'right' }} value={this.state.application.recommenderName} onChangeText={(value) => {this.setState({application: { ...this.state.application, recommenderName: value}})}}/>
                    </Item>
                    <Item stackedLabel>
                        <Label>{strings.recommendationletter}:</Label>
                        <Textarea rowSpan={5} bordered placeholder={strings.copyPasteRecLetter} width={300} style={{marginTop: 15, marginBottom: 15}}
                                  value={this.state.application.recommendation}
                                  onChangeText={(value) => {this.setState({application: { ...this.state.application, recommendation: value}})}}/>
                    </Item>
                </Form>
            );
        } else if (number == 7) {
            return (
                <View style={{flex: 1, flexDirection:"column", justifyContent: "space-between", alignItems: "center"}}>
                    <Text style={{fontSize: 20, textAlign: "center"}}>{strings.honestyStatement}</Text>
                    <CheckBox checked={this.state.affirmationChecked} style={{marginTop: 10}} onPress={() => {this.setState({affirmationChecked: !this.state.affirmationChecked})}}/>
                    <Label style={{marginTop: 20}}>{strings.signature}:</Label>
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
                            <Text style={{marginLeft: 10}}>{strings.previous}</Text>
                        </Button>
                    </Left>
                    <Body />
                    <Right>
                        <Button transparent onPress={ () => {this.setState({page: this.state.page + 1})}}>
                            <Text style={{marginRight: 10}}>{strings.next}</Text>
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
                            <Text style={{marginRight: 10}}>{strings.next}</Text>
                        </Button>
                    </Right>
                </Footer>
            );
        } else {
            return (
                <Footer>
                    <Left>
                        <Button transparent onPress={ () => {this.setState({page: this.state.page - 1})}}>
                            <Text style={{marginLeft: 10}}>{strings.previous}</Text>
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
                    <Text>{strings.submit}</Text>
                </Button>
            )
        } else {
            return (
                <Button full disabled style={{borderWidth: 2, borderColor: 'lightgrey', borderRadius:15, marginTop:5}}>
                    <Text>{strings.submit}</Text>
                </Button>
            )
        }
    }

    submitApplication() {
        Database.createApplication(new Applicant(this.state.applicant), new Application(this.state.application)).then(() => {
            Alert.alert(strings.successfullySaved);
            this.props.navigation.goBack()
        }).catch((e) => {
            Alert.alert("Error Saving Application", e);
        })
    }
}