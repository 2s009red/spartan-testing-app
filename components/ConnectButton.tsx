import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity, Button } from 'react-native';

import Colors from '../constants/Colors';
import { MonoText } from './StyledText';
import { Text, View } from './Themed';

export default function ConnectButton() {
  const localstyle = styles({isConnected: false})

  return (
    <View style={localstyle.container}>
      <TouchableOpacity
        style={localstyle.button}
        onPress={() => console.log("hi")}
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
