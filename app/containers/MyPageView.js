import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IssueList from '../components/IssueList.js';
import ProjectList from '../components/ProjectList.js';
import TopBar from '../components/TopBar.js';
import config from '../../config.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
    };
  }

  componentDidMount() {
    ///////////////////////////////////////////////////////////////
    let hostname = config.hostname;
    let username = config.username;
    let password = config.password;
    let encodedKey = config.apikey;

    fetch(hostname + '/issues.json?assigned_to_id=me', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + encodedKey,
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.issues);
      this.setState({
        issues: responseJson.issues,
      })
    })
  }

  render() {
    return(
      <View style={styles.container}>
        <TopBar centerText="My Issues" />
        <IssueList
          data={this.state.issues}
          navigator={this.props.navigator}
         />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});
