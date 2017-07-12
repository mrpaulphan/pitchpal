import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image,
  Button,
  AsyncStorage
} from 'react-native';
import Navigation from './components/Navigation';

export default class App extends React.Component {
  componentDidMount() {
  //  AsyncStorage.clear();
    AsyncStorage.getAllKeys((err, keys) => {
      console.log(keys);
  });

  }
  constructor(props) {
    super(props);
    this.state = {
      totalPitches: 0,
      totalBalls: 0,
      totalStrikes: 0,
      totalOuts: 0,
      totalIp: 0
    }
  }

  pressedStrike() {
    console.log('pressedStrike');

    this.setState({
      totalPitches: this.state.totalPitches + 1,
      totalStrikes: this.state.totalStrikes + 1,
    });
    try {
      AsyncStorage.multiSet(
        ['totalPitches', this.state.totalPitches.toString()],
        ['totalStrikes', this.state.totalStrikes.toString()],
    );

    } catch (error) {
      console.log(error);
    }
  }
  pressedBall() {
    console.log('pressedBall');
    try {
      const value = AsyncStorage.getItem('totalPitches');
      if (value !== null){
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
    this.setState({
      totalPitches: this.state.totalPitches + 1
    });

  }
  render() {
    return (
      <Image source={require('./assets/images/background.jpg')} style={styles.page}>
        <StatusBar backgroundColor="transparent" barStyle="light-content"/>
        <Navigation style={styles.navigation}/>
        <View style={styles.total}>
          <Text style={styles.totalText}>TOTAL PITCHES</Text>
          <Text style={styles.totalCount}>{this.state.totalPitches}</Text>
        </View>

        <View style={styles.stats}>
          <View style={styles.statsColumn}>
            <Text style={styles.statsText}>BALL</Text>
            <Text style={styles.statsCount}>{this.state.totalBalls}</Text>
          </View>

          <View style={styles.statsColumn}>
            <Text style={styles.statsText}>STRIKE</Text>
            <Text style={styles.statsCount}>{this.state.totalStrikes}</Text>
          </View>

          <View style={styles.statsColumn}>
            <Text style={styles.statsText}>OUT</Text>
            <Text style={styles.statsCount}>{this.state.totalOuts}</Text>
          </View>

          <View style={styles.statsColumn}>
            <Text style={styles.statsText}>IP</Text>
            <Text style={styles.statsCount}>{this.state.totalIp}</Text>
          </View>

        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonColumnLeft,
          styles.buttonsColumn}>
            <Button onPress={this.pressedStrike.bind(this)} style={styles.buttonsButton} title="Strike" accessibilityLabel="Pitch was a strike"/>
            <Button onPress={this.pressedBall.bind(this)} style={styles.buttonsButton} title="Foul" accessibilityLabel="Pitch was a ball"/>
            <Button onPress={this.pressedBall.bind(this)} style={styles.buttonsButton} title="In Play" accessibilityLabel="Pitch was a ball"/>
          </View>

          <View style={styles.buttonColumnRight,
          styles.buttonsColumn}>
            <Button onPress={this.pressedBall.bind(this)} style={styles.buttonsButton} title="Ball" accessibilityLabel="Pitch was a strike"/>
            <Button onPress={this.pressedBall.bind(this)} style={styles.buttonsButton} title="Run" accessibilityLabel="Pitch was a ball"/>
            <Button onPress={this.pressedBall.bind(this)} style={styles.buttonsButton} title="Out" accessibilityLabel="Pitch was a ball"/>
          </View>
        </View>

      </Image>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: null,
    height: null
  },
  navigation: {
    flex: 1
  },
  buttons: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
  },
  total: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    paddingTop: 50,
    paddingBottom: 50
  },
  totalText: {
    fontSize: 30,
    color: 'white'
  },
  totalCount: {
    fontSize: 80,
    color: 'white'
  },
  stats: {
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderTopWidth: 2,
    padding: 10,
    borderColor: '#d6d7da',
    backgroundColor: 'transparent'
  },
  statsColumn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  statsText: {
    paddingRight: 10,
    color: 'white'
  },
  statsCount: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 5,
    paddingBottom: 2,
    paddingLeft: 5,
    paddingRight: 5,
    textAlign: 'center',
    borderWidth: 2,
    borderColor: 'rgb(45, 62, 43)',
    backgroundColor: 'rgb(54, 84, 54)',
    color: 'white'
  },
  buttonsColumn: {
    flex: 1,
    flexDirection: 'column'
  },
  buttonColumnLeft: {},
  buttonColumnRight: {}
});
