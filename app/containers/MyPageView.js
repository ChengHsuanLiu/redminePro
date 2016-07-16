import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import IssueList from '../components/IssueList.js';
import ProjectList from '../components/ProjectList.js';
import TopBar from '../components/TopBar.js';
import config from '../config.js';
import Redmine from '../services/redmine';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			issues: [],
		};
	}

	componentDidMount() {
		let redmine = new Redmine(config.redmine);

		redmine.issues({assigned_to_id: 'me'}).then(({issues}) => {
			this.setState({issues});
		});
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
