import React, { Component } from "react";
import {
    View,
    Text,
} from "react-native";
import {
    Container,
    Header,
    List,
    ListItem,
    Body,
    Left,
    Right,
    Icon,
    Button
} from 'native-base'

export default class Applications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            applications: []
        };
    }

    renderHeader() {
        return(
            <Header>
                <Left />
                <Body>
                <Text>My Applications</Text>
                </Body>
                <Right>
                    <Button transparent onPress={ () => {this.newApplication()}}>
                        <Icon name="create" />
                    </Button>
                </Right>
            </Header>
        );
    }

    render() {
        return(
            <Container>
                {this.renderHeader()}
                {this.renderList()}
            </Container>
        );
    }

    renderList() {
        if (this.state.applications.length == 0) {
            return (
                <View>
                    <Text style={{textAlign: 'center', marginTop:10, fontSize:15}}>You do not currently have any applications. Click above to start one!</Text>
                </View>
            )
        } else {
            return (
                <Content>

                    <List dataArray={this.state.applications}
                          renderRow={(item) =>
                              <ListItem>
                                  <Body style={{flex: 1, flexDirection: 'row'}}>
                                  </Body>
                                  <Right>
                                  </Right>
                              </ListItem>
                          }>
                    </List>
                </Content>
            )
        }
    }

    newApplication() {
        this.props.navigation.navigate('EditApplication', {isPublic: false});
    }
}