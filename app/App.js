import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IssueList from './components/IssueList.js';
import ProjectList from './components/ProjectList.js';
import config from './config.js';
import Redmine from './services/redmine';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      issues: [],
      projects: []
    };
  }

  componentDidMount() {
		var redmine = new Redmine(config.redmine);

		redmine.issues({}).then(({issues}) => {
			this.setState({issues});
		});

		redmine.projects({}).then(({projects}) => {
			this.setState({projects});
		});
  }

  render() {
    return(
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
