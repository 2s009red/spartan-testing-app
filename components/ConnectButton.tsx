import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

const SERVER_IP = "http://35.173.125.185:3000";

export default function ConnectButton() {
  const localstyle = styles({isConnected: false})

  return (
    <View style={localstyle.container}>
      <TouchableOpacity
        style={localstyle.button}
        onPress={() => {
          fetch(`${SERVER_IP}/punch`)
        }}
      >
        <Text style={{fontSize: 20}}>Connect</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = (props) => {
  let buttonBackground = "green";

  if (props.isConnected) {
    buttonBackground = "red";
  }  

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    button: {
      alignItems: "center",
      backgroundColor: "green",
      padding: 15,
      borderRadius: 10

    },
  });
}
