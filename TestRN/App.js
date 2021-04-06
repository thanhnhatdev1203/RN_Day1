/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import type { Node } from 'react';
import {
  Alert,
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


import BaseButton from './src/component/baseButton';
import BaseButtonClass from './src/component/baseButtonClass';
class App extends Component {
  render() {
    return (
      <View
        style={styles.view}
      >
        <TouchableOpacity style={[styles.button,styles.red]} onPress={()=> Alert.alert("Primary")}>
          <Text style={styles.sectionTitle}>Primary</Text>
        </TouchableOpacity>
        <BaseButton title='Secondary' onPress={() =>Alert.alert( "Secondary")} style={{...styles.button, backgroundColor:'green'}} />
        <BaseButton title="Success" onPress={() => Alert.alert("Success")} style={{...styles.button, backgroundColor:'gray'}} />
         <BaseButton title="Danger" onPress={() => Alert.alert("Danger")} style={{...styles.button,backgroundColor:'brown'}}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 52,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '500',
    margin: 15,
    color: "white",
    textAlign: 'center',
    marginVertical: 5
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  red:{
    backgroundColor :'red'
  },
  gray:{
    backgroundColor:'gray'
  },
  button: {
    // marginTop: 100,
    backgroundColor: 'red',
    marginHorizontal:60, 
    borderRadius: 10,
    margin : 10
  },
  view: {
    flex: 1,
    justifyContent: 'center',
    margin: 15,
    marginTop: 10,
    padding  : 10
  }

});

export default App;

