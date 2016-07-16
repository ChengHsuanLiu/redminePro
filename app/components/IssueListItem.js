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
        <View style={styles.row}>
          <Text style={styles.id}>#{this.props.data.id}</Text>
          <Text style={styles.projectName}>{this.props.data.project.name}</Text>
          <Text style={styles.subject} numberOfLines={1} lineBreakMode="tail">
          { ((this.props.data.subject).length > 22) ?
            (((this.props.data.subject).substring(0, 22 - 2)) + '..') :
            this.props.data.subject }
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.tracker_name}>{this.props.data.tracker.name}</Text>
          <Text style={styles.status_name}>{this.props.data.status.name}</Text>
          <Text style={styles.priority_name}>{this.props.data.priority.name}</Text>
        </View>
        <View style={styles.row}>
          {this.props.data.assigned_to != null?
            <Text style={styles.assigned_to_name}>{this.props.data.assigned_to.name}</Text>:null}
          <Text style={styles.due_date}>{this.props.data.due_date}</Text>
        </View>
			</TouchableOpacity>

			)
	}
}


const styles = StyleSheet.create({
  postItem: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  row: {
    flexDirection: 'row',
    paddingTop: 2,
    paddingBottom: 2,
  },
  id: {
    marginRight: 4,
    color: '#397880',
    fontSize: 15
  },
  projectName: {
    marginRight: 4,
    color: '#397880',
    fontSize: 15
  },
  subject: {
    marginRight: 4,
    fontSize: 15
  },
  tracker_name: {
    backgroundColor: '#C2BA63',
    color: '#FFF',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4,
    paddingLeft: 4,
    marginRight: 2,
    borderRadius: 4
  },
  status_name: {
    backgroundColor: '#C2BA63',
    color: '#FFF',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4,
    paddingLeft: 4,
    marginRight: 2,
    borderRadius: 4
  },
  priority_name: {
    backgroundColor: '#C2BA63',
    color: '#FFF',
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 4,
    paddingLeft: 4,
    marginRight: 2,
    borderRadius: 4
  }

});

module.exports = PostListItem;
