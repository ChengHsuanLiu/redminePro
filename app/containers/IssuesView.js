import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ProjectList from '../components/ProjectList.js';
import TopBar from '../components/TopBar.js';
import config from '../../config.js';
import Redmine from '../services/redmine';

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			projects: []
		};
	}

	componentDidMount() {
		let redmine = new Redmine(config.redmine);

		redmine.projects({}).then(({projects}) => {
			this.setState({projects});
		});
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
