import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import MyPageView from './MyPageView.js';
import IssuesView from './IssuesView.js';
import config from '../config.js';

export default class MainView extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'MyPageView'
    };
  }

  render() {
    return(
      <View style={styles.container}>
        <View style={styles.tabViewWindow}>
          {this.state.activeTab == 'MyPageView'?
          <MyPageView
            navigator={this.props.navigator} />
          :null}
          {this.state.activeTab == 'IssuesView'?
          <IssuesView
            navigator={this.props.navigator} />
          :null}
        </View>

        <View style={styles.tabbar}>
          <TouchableOpacity style={styles.tabbarItem}
                            onPress={() => this.activateTab('MyPageView')}>
            <Text style={styles.tabbarItemText}>My Page</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tabbarItem}
                            onPress={() => this.activateTab('IssuesView')}>
            <Text style={styles.tabbarItemText}>Issues</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  activateTab(activeTab) {
    this.setState({
      activeTab: activeTab
    })
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabViewWindow: {
    flex: 1
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#397880',
  },
  tabbarItem: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabbarItemText: {
    textAlign: 'center',
    color: '#FFF',
    marginTop: 6
  },
  tabbarIcon: {
    width: 18,
    height: 18,
  }
});
