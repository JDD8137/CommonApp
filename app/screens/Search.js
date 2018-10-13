import React, { Component } from "react";
import {
  AppRegistry,
  Icon,
  View,
  Text,
  Image,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Button
} from "react-native";
import { List, ListItem, SearchBar } from "react-native-elements";
import {SettingsSwitch, SettingsPicker} from 'react-native-settings-components';
import { styles } from '../styles/styles';
import Panel from '../Components/Panel';
import { colorStyles, colorPalette } from "../styles/colorStyles";
import _ from "lodash";
import { getUniversities, contains } from "../api/index";
//import isPublic from "../api/global"
//import isPrivate from "../api/global"



export default class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
      query: "",
      fullData: [],
      hasSport: false,
      isProfit: false,
      isP: false,
      expanded: false
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
  const { navigate } = this.props.navigation;
  const isP = this.getPublic();
  const isPr = this.getPrivate();

    return (
    <View style={styles.GridColumnContainer}>
      <SearchBar
        placeholder= "Search by name, location or acronym."
        lightTheme
        round
        onChangeText={this.handleSearch}
      />
      <Panel title="Filters">
        <SettingsSwitch
            title={'Private'}
            onSaveValue={(value) => {
                console.log('allow push notifications:', value);
                this.setState({
                    allowPushNotifications: value
                });
            }}
            value={this.state.allowPushNotifications}
            thumbTintColor={(this.state.allowPushNotifications) ? colorPalette.switchEnabled : colorPalette.switchDisabled}
        />
        <SettingsSwitch
            title={'Non-Profit'}
            onSaveValue={(value) => {
                console.log('allow push notifications:', value);
                this.setState({
                    allowPushNotifications: value
                });
            }}
            value={this.state.allowPushNotifications}
            thumbTintColor={(this.state.allowPushNotifications) ? colorPalette.switchEnabled : colorPalette.switchDisabled}
        />
        <SettingsSwitch
            title={'Sports Facilities'}
            onSaveValue={(value) => {
                console.log('allow push notifications:', value);
                this.setState({
                    hasSport
                });
            }}
            value={this.state.allowPushNotifications}
            thumbTintColor={(this.state.allowPushNotifications) ? colorPalette.switchEnabled : colorPalette.switchDisabled}
        />
      </Panel>
      {/* <View style={styles.FilterLabel}> */}
        {/* <Text style={styles.FilterLabel}>Filter</Text> */}
        {/* <Icon type="FontAwesome" name="university" style={[colorStyles.primaryText, styles.UniversityIcon]} onPress={() => {navigate('Filter', {isPublic: false})}}></Icon> */}
        {/* <Button
          onPress={() => {navigate('Filter')}}
          title="Filter >"
          color="#841584"
          accessibilityLabel="Filter Universities"
        /> */}
        {/* <Image>

        </Image> */}
      {/* </View> */}
    </View>
    );
  };

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
                roundAvatar
                title={`${item.name}`}
                subtitle={`${item.acronym} - ${item.location}`}
                // avatar={{ uri: item.picture.thumbnail }}
                containerStyle={{ borderBottomWidth: 0 }}
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