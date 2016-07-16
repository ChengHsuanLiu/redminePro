/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import IssueList from './IssueList.js';
import ProjectList from './ProjectList.js';
import config from './config.js';

class RedminePro extends Component {

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      projects: []
    };
  }

  componentDidMount() {
    ///////////////////////////////////////////////////////////////
    let hostname = config.hostname;
    let username = config.username;
    let password = config.password;
    let encodedKey = config.apikey;

    fetch(hostname + '/issues.json', {
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

    fetch(hostname + '/projects.json', {
      method: 'GET',
      headers: {
        'Authorization': 'Basic ' + encodedKey,
      }
    })
    .then((response) => response.json())
    .then((responseJson) => {
      console.log(responseJson.projects);
      this.setState({
        projects: responseJson.projects,
      })
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <IssueList
          data={this.state.issues}
         />
        <ProjectList
          data={this.state.projects}
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

AppRegistry.registerComponent('RedminePro', () => RedminePro);
