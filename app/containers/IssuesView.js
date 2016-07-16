import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProjectList from '../components/ProjectList.js';
import TopBar from '../components/TopBar.js';
import config from '../../config.js';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    ///////////////////////////////////////////////////////////////
    let hostname = config.hostname;
    let username = config.username;
    let password = config.password;
    let encodedKey = config.apikey;

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
    return(
      <View style={styles.container}>
        <TopBar centerText="Issues" />
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
