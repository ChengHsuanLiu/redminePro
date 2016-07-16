import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class PostListItem extends Component {
	render() {
		return(
			<TouchableOpacity style={styles.postItem}
				onPress={this.props.onItemPress}>
				<Text>{this.props.data.subject}</Text>
			</TouchableOpacity>

			)
	}
}


const styles = StyleSheet.create({
  postItem: {

  }
});

module.exports = PostListItem;
