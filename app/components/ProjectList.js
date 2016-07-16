import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  RefreshControl,
  ListView
} from 'react-native';

import ProjectListItem from './ProjectListItem';

class ProjectList extends Component {
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
            dataSource={this.state.dataSource.cloneWithRows(this.props.data)}
            renderRow={(project) => this.renderProjectRow(project)}
            enableEmptySections={true}
            renderSectionHeader={this.renderListViewHeader.bind(this)}
           />
        </ScrollView>
      </View>
    );
  }

  renderProjectRow(project) {
    return (
      <ProjectListItem
        data={project}
        onItemPress={() => console.log('pressed')}
        />
      )
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

module.exports = ProjectList;
