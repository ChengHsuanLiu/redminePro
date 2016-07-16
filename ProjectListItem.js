import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class ProjectListItem extends Component {
	render() {
		return(
			<TouchableOpacity style={styles.projectListItem}
				onPress={this.props.onItemPress}>
				<Text>{this.props.data.name}</Text>
			</TouchableOpacity>

			)
	}
}


const styles = StyleSheet.create({
  projectListItem: {

  }
});

module.exports = ProjectListItem;
