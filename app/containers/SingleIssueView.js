import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Navigator } from 'react-native';

import TopBar from '../components/TopBar.js';

export default class SingleIssueView extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    console.log('single view', this.props.data);
  }

  render() {
    return(
      <View style={{ flex: 1, backgroundColor: '#FFF' }}>
        <TopBar
          centerText={this.props.data.subject}
          leftBtnText="Back"
          leftAction={() => this.props.navigator.pop()} />
        <View style={styles.header}>
          <View style={styles.projectBox}>
            <Text style={styles.projectName}>{this.props.data.project.name}</Text>
          </View>
          <View style={styles.nameBox}>
            <Text style={styles.idText}>#{this.props.data.id}</Text>
            <Text style={styles.subjectText}>{this.props.data.subject}</Text>
          </View>
          <View style={styles.statusBox}>
            <Text style={styles.trackerName}>{this.props.data.tracker.name}</Text>
            <Text style={styles.statusName}>{this.props.data.status.name}</Text>
            <Text style={styles.priorityName}>{this.props.data.priority.name}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoBoxLeft}>
            <Text style={styles.infoBoxLabel}>Assignee</Text>
          </View>
          <View style={styles.infoBoxRight}>
            <Text style={styles.infoBoxText}>{this.props.data.assigned_to != null?this.props.data.assigned_to.name:null}</Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoBoxLeft}>
            <Text style={styles.infoBoxLabel}>Due Date</Text>
          </View>
          <View style={styles.infoBoxRight}>
            <Text style={styles.infoBoxText}>{this.props.data.due_date}</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header: {
    backgroundColor: '#397880',
    paddingTop: 24,
    paddingBottom: 12,
    paddingRight: 12,
    paddingLeft: 12
  },
  projectName: {
    color: '#FFF',
    fontSize: 14,
    marginBottom: 12
  },
  nameBox: {
    flexDirection: 'row',
  },
  idText: {
    fontSize: 18,
    color: '#FFF',
    marginRight: 12,
  },
  subjectText: {
    fontSize: 18,
    color: '#FFF'
  },
  statusBox: {
    paddingTop: 12,
    flexDirection: 'row',
  },
  trackerName: {
    borderWidth: 1,
    color: '#FFF',
    borderColor: '#FFF',
    borderRadius: 12,
    marginRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  statusName: {
    borderWidth: 1,
    color: '#FFF',
    borderColor: '#FFF',
    borderRadius: 12,
    marginRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  priorityName: {
    borderWidth: 1,
    color: '#FFF',
    borderColor: '#FFF',
    borderRadius: 12,
    marginRight: 8,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 8,
    paddingLeft: 8,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#EEE',
  },
  infoBoxLeft: {
    alignSelf: 'flex-start',
    flex: 1,
  },
  infoBoxRight: {
    alignSelf: 'flex-end',
    flex: 1,
  },
  infoBoxText: {
    textAlign: 'right',
    fontSize: 16,
  },
  infoBoxLabel: {
    textAlign: 'left',
    fontSize: 16,
  }
});
