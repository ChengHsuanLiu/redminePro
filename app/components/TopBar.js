import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

class TopBar extends Component {
  render() {
    return (
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.topBarRightBtn}
          onPress={this.props.leftAction}>
          <Text style={styles.topBarBtnText}>{this.props.leftBtnText}</Text>
        </TouchableOpacity>
        <View style={styles.topBarCenterBlock}>
          <Text style={styles.topBarCenterText}>{this.props.centerText}</Text>
        </View>
        <TouchableOpacity
          style={styles.topBarLeftBtn}
          onPress={this.props.rightAction}>
          <Text style={styles.topBarBtnText}>{this.props.rightBtnText}</Text>
        </TouchableOpacity>
      </View>
      )
  }
}

let styles = StyleSheet.create({

    topBar: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#397880',
      paddingTop: 24,
      paddingBottom: 4,
    },

    topBarRightBtn: {
      width: 60,
      paddingBottom: 8,
      paddingTop: 8,
    },

    topBarLeftBtn: {
      width: 60,
      paddingBottom: 8,
      paddingTop: 8,
    },

    topBarCenterBlock: {
      flex: 1,
      paddingBottom: 8,
      paddingTop: 8,
    },

    topBarBtnText: {
      color: '#FFF',
      fontSize: 16,
      textAlign: 'center',
    },

    topBarCenterText: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 16,
    }
});


module.exports = TopBar;
