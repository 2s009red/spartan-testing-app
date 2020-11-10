import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';

import { Text, View } from '../components/Themed';
import Slider from '@react-native-community/slider';

import logo from '../assets/images/logoLight.png';

const SERVER_IP = "http://35.173.125.185";

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={{ width: 600, height: 159 }} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('punch');
          fetch(`${SERVER_IP}/punch`);
        }}
      >
        <Text style={{ fontSize: 40 }}>Punch</Text>
      </TouchableOpacity>
      {/* <Text style={{fontSize: 20, margin: 20}}>Speed</Text>
      <Slider
        style={{ width: "50%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#555"
        onSlidingComplete={(value) => {
          console.log(value);
          const data = {speed: Math.floor(20 - value * 20)};

          fetch(`${SERVER_IP}/speed?speed=${Math.floor(20 - value * 20)}`, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
          });

        }}
      /> */}
      <Text style={{ fontSize: 20, margin: 20 }}>Frequency</Text>
      <Slider
        style={{ width: "50%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#555"
        onSlidingComplete={(value) => {
          const data = { frequency: value };

          fetch(`${SERVER_IP}/sparring-config`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        }}
      />
      <Text style={{ fontSize: 20, margin: 20 }}>Extension</Text>
      <Slider
        style={{ width: "50%", height: 40 }}
        minimumValue={90}
        maximumValue={180}
        value={180}
        // minimumTrackTintColor="#FFFFFF"
        // maximumTrackTintColor="#555"
        onSlidingComplete={(value) => {
          const data = { extension: value };

          fetch(`${SERVER_IP}/sparring-config`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
        }}
      />

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('spar');
            const data = { spar: true };

            fetch(`${SERVER_IP}/spar`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
          }}
        >
          <Text style={{ fontSize: 40 }}>Start sparring</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log('stop spar');
            const data = { spar: false };

            fetch(`${SERVER_IP}/spar`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
          }}
        >
          <Text style={{ fontSize: 40 }}>Stop sparring</Text>
        </TouchableOpacity>
      </View>

      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            fetch(`${SERVER_IP}/extend`);
          }}
        >
          <Text style={{ fontSize: 40 }}>Extend</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            fetch(`${SERVER_IP}/noextend`);
          }}
        >
          <Text style={{ fontSize: 40 }}>Stop extension</Text>
        </TouchableOpacity>
      </View>
      {/* <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('punch');
          fetch(`${SERVER_IP}/punch`);
        }}
      >
        <Text style={{fontSize: 100}}>Stop Sparring</Text>
      </TouchableOpacity> */}
    </View>
  );
}

/*
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => console.log("hi")}
      >
        <Text style={{fontSize: 20}}>Connect</Text>
      </TouchableOpacity>
      <Slider
        style={{ width: "50%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#555"
      />
      <Slider
        style={{ width: "50%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#555"
      />
      <Slider
        style={{ width: "50%", height: 40 }}
        minimumValue={0}
        maximumValue={1}
        minimumTrackTintColor="#FFFFFF"
        maximumTrackTintColor="#555"
      />

    </View>
  );
}
*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  button: {
    alignItems: "center",
    backgroundColor: "red",
    padding: 15,
    borderRadius: 10,

    margin: 15,
  },
});
