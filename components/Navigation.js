import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appTitle: 'PitchPal',
    }

  }
  render() {
    return (
      <View style={styles.navigation}>
        <Text style={styles.clear}>Clear</Text>
        <Text style={styles.title}>{this.state.appTitle}</Text>
        <Text style={styles.send}>Send</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  navigation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#223121',
    paddingTop: 40,
    paddingBottom: 20
  },
  title: {
    flex: 1,
    color: '#ffffff',
    textAlign: 'center',
  },
  clear: {
    flex: 1,
    color: '#ffffff',
    paddingLeft: 20,

    textAlign: 'left'
  },
  send: {
    flex: 1,
    color: '#ffffff',
    paddingRight: 20,
    textAlign: 'right'
  }
});
