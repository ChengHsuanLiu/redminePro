import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Navigator } from 'react-native';

import MainView from './containers/MainView.js';
import SingleIssueView from './containers/SingleIssueView.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <Navigator
          style={{flex:1}}
          navigationBar={this._renderNavigationBar()}
          initialRoute = {{ id: 'MainView' }}
          configureScene={this._configureScene}
          renderScene={this._renderScene}
        />
      </View>
    );
  }

  _configureScene(route) {
    switch(route.id) {
      default:
        return Navigator.SceneConfigs.PushFromRight;
    }
  }

  _renderScene = (route, navigator) => {
    _navigator = navigator;

    switch(route.id) {
      case 'MainView':
        return (
          <MainView
            navigator={navigator}  />
        );
      case 'SingleIssueView':
        return (
          <SingleIssueView
            navigator={navigator}
            data={route.data}  />
        );

    }
  }

  _renderNavigationBar() {
    return (<View></View>);
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
