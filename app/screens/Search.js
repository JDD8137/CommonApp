import React, { Component } from "react";
import {
	AppRegistry,
	Button,
  Icon,
  View,
  Image,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Alert
} from "react-native";

import { List, ListItem, SearchBar } from "react-native-elements";
import { styles } from '../styles/styles';
import Panel from '../Components/Panel';
import { colorStyles, colorPalette } from "../styles/colorStyles";
import _ from "lodash";
import ToggleSwitch from "toggle-switch-react-native"
import { getUniversities, contains } from "../api/index";

import {requestPayment} from "../api/mobileMoney"

import { Database } from "../models/Database"

export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
			data: [],
			filters: [],
      error: null,
      query: "",
			fullData: [],
			isPub: false,
			isPriv: false,
			isProf: false,
			isNonProf: false,
			hasSport: false,
      expanded: false,
      groupSize: 3
    };
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
    //   <HeaderBarItem to='InfoScreen' title='App info' />,
    // headerRight:
    //   <HeaderBarItem to='FeedbackScreen' title='Feedback' />
  });

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = _.debounce(() => {
    this.setState({ loading: true });

    getUniversities(15, this.state.query)
      .then(universities => {
        this.setState({
          loading: false,
          data: universities,
          fullData: universities
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  }, 250);

  handleSearch = text => {
    const formattedQuery = text.toLowerCase();
    const data = _.filter(this.state.fullData, university => {
      return contains(university, formattedQuery);

    });
    this.setState({ data, query: text }, () => this.makeRemoteRequest());
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "90%",
          backgroundColor: "#CED0CE",
          marginLeft: "5%"
        }}

      />
    );
	};

  getPublic() {
  return this.props.navigation.getParam('isPublic', false);
   }

   getPrivate() {
    return this.props.navigation.getParam('isPrivate', false);
   }

   getProfit() {
     return this.props.navigation.getParam('isProfit', false);
   }

   getNonProfit() {
     return this.props.navigation.getParam('isNonProfit', false);
      }
   getSports() {
     return this.props.navigation.getParam('hasSports', false);
   }
   getNoSports() {
        return this.props.navigation.getParam('hasNoSports', false);
   }



  renderHeader = () => {
  // const { navigate } = this.props.navigation;

    return (
    <View style={styles.GridColumnContainer}>
      <SearchBar
        placeholder= "Search by name, location or acronym."
        lightTheme
        round
        onChangeText={this.handleSearch}
      />

      <Panel title="Filters">
				<Button
					title="Clear"
					color='red'
					onPress={() => {
						this.setState({
							isPub: false,
							isPriv: false,
							isProf: false,
							isNonProf: false,
							hasSport: false,
						});
						// handle search
						this.makeRemoteRequest();
					}}/>

				<ToggleSwitch
					style={styles.searchFilterItem}
					isOn={this.state.isPub}
					label='Public '
					size='medium'
					onColor='green'
					onToggle={(isOn) => {
            this.setState({isPub: !this.state.isPub})
            if (isOn) {
			  			this.state.data = this.state.data.filter(item => item.is_public == isOn, this.handleSearch);
            } else {
              // this.makeRemoteRequest();
              this.getCurrentFilters();
            }
          }}/>

				<ToggleSwitch
					style={styles.searchFilterItem}
					isOn={this.state.isPriv}
					label='Private'
					size='medium'
					onColor='green'
					onToggle={(isOn) => {
            this.setState({isPriv: !this.state.isPriv})
            if (isOn) {
						  this.state.data = this.state.data.filter(item => item.is_public == isOn, this.handleSearch);
            } else {
              // this.makeRemoteRequest();
              this.getCurrentFilters();
            }
						
					}}/>

				<ToggleSwitch
					style={styles.searchFilterItem}
					isOn={this.state.isProf}
					label='Profit        '
					size='medium'
					onColor='green'
					onToggle={(isOn) => {
            this.setState({isProf: !this.state.isProf})
            if (isOn) {
              this.state.data = this.state.data.filter(item => item.is_non_profit == isOn, this.handleSearch);
            } else {
              // this.makeRemoteRequest();
              this.getCurrentFilters();
            }
            
					}}/>

				<ToggleSwitch
					style={styles.searchFilterItem}
					isOn={this.state.isNonProf}
					label='Non-Profit'
					size='medium'
					onColor='green'
					onToggle={(isOn) => {
            this.setState({isNonProf: !this.state.isNonProf})
            if (isOn) {
							this.state.data = this.state.data.filter(item => item.is_non_profit == isOn, this.handleSearch);
            } else {
              // this.makeRemoteRequest();
              this.getCurrentFilters();
            }
            
					}}/>

				<ToggleSwitch
					style={styles.searchFilterItem}
					isOn={this.state.hasSport}
					label='Sports Facility'
					size='medium'
					onColor='green'
					onToggle={(isOn) => {
            this.setState({hasSport: !this.state.hasSport})
            if (isOn) {
              this.state.data = this.state.data.filter(item => item.has_sports_facility == isOn, this.handleSearch);
            } else {
              // this.makeRemoteRequest();
              this.getCurrentFilters();
            }
						
					}}/>

			</Panel>
		</View>
		);
  };
  
  clearAll = () => {
    this.setState({isPub: false,
                   isPriv: false,
                   isProf: false,
                   isNonProf: false,
                   hasSport:false})
  }

  getCurrentFilters = () => {
    this.makeRemoteRequest();
    if (this.state.isPub)
      this.state.data = this.state.data.filter(item => item.is_public == true, this.handleSearch);
    if (this.state.isPriv)
      this.state.data = this.state.data.filter(item => item.is_public == false, this.handleSearch);
    if (this.state.isProf)
      this.state.data = this.state.data.filter(item => item.is_non_profit == false, this.handleSearch);
    if (this.state.isNonProf)
      this.state.data = this.state.data.filter(item => item.is_non_profit == true, this.handleSearch);
    if (this.state.hasSport)
      this.state.data = this.state.data.filter(item => item.hasSport == true, this.handleSearch);
  }

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };


  render() {
    const { navigate } = this.props.navigation;
    const isP = this.getPublic();
    const isPrivate = this.getPrivate();
    const isProfit = this.getProfit();
    const isNon = this.getNonProfit();
    const hasSport = this.getSports();
    const hasNoSport = this.getNoSports();
    if(isP) {
      this.state.data = this.state.data.filter(item => item.is_public == true);
    }
    if(isPrivate) {
      this.state.data = this.state.data.filter(item => item.is_public == false);
    }
    if(isProfit) {
      this.state.data = this.state.data.filter(item => item.is_non_profit == false);
    }
    if(isNon) {
      this.state.data = this.state.data.filter(item => item.is_non_profit == true);
    }
    if(hasSport) {
        this.state.data = this.state.data.filter(item => item.has_sports_facility == true);
    }
    if(hasNoSport) {
          this.state.data = this.state.data.filter(item => item.has_sports_facility == false);
    }
    return (
      <SafeAreaView>
        <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <ListItem
                // roundAvatar
                title={`${item.name}`}
                subtitle={`${item.acronym} - ${item.location}`}
								containerStyle={{ borderBottomWidth: 0 }}
								// leftIcon={name='check'}
								onPress={() => {
                                    Alert.alert(
                                        `Apply to ${item.name}?`,
                                        `Are you sure you want to apply to ${item.name}? They will be sent your entire application.`,
                                        [
                                            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                            {text: 'Apply', onPress: () => {
                                                navigate("Payment", {university: item});

                                                }},
                                        ],
                                        { cancelable: false }
                                    )
								}}
								// leftIconOnPress={() => {
								// 	// make icon green checkmark and add to array of selected universities
								// }}
              />
            )}
            keyExtractor={item => item.name}
            ItemSeparatorComponent={this.renderSeparator}
            ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
          />

        </List>
      </SafeAreaView>
    );
  }
}