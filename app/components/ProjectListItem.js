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
				<Text style={styles.ListText}>{this.props.data.name}</Text>
			</TouchableOpacity>

			)
	}
}


const styles = StyleSheet.create({
  projectListItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
    paddingTop: 16,
    paddingBottom: 16,
    paddingRight: 8,
    paddingLeft: 8,
  },
  ListText: {
    fontSize: 16,
  }
});

module.exports = ProjectListItem;
