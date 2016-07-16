import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ListView
} from 'react-native';
import IssueListItem from './IssueListItem';

class IssueList extends Component {
  constructor(props) {
    super(props);
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

    this.state = {
      dataSource: ds
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <ListView
            navigator={this.props.navigator}
            dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
            renderRow={(issue) => this.renderIssueRow(issue)}
            enableEmptySections={true}
            renderSectionHeader={this.renderListViewHeader.bind(this)}
           />
        </ScrollView>
      </View>
    );
  }

  renderIssueRow(issue) {
    return (
      <IssueListItem
        data={issue}
        onItemPress={() => this.navigateTo('SingleIssueView', issue)}
        />
      )
  }

  navigateTo(action, data) {
    console.log('data:', data);

    switch(action) {
      case 'SingleIssueView':
        this.props.navigator.push({
          id: 'SingleIssueView',
          data: data
        })
        break;
    }
  }

  renderListViewHeader() {
    return(
      <View></View>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});

module.exports = IssueList;
