import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Platform } from 'react-native';
import MapView from 'react-native-maps';
//import * as Permissions from "expo-permissions";
import * as Location from 'expo-location';  // https://arnav25.medium.com/background-location-tracking-in-react-native-d03bb7652602

export default function App() {
  const [currentLocation, setCurrentLocation] = React.useState({ latitude: 0, longitude: 0 });
  const [hasCurrentLocation, setHasCurrentLocation] = React.useState(false);

  const refreshCurrentLocation = async () => {
    const pos = await Location.getCurrentPositionAsync({});
    console.log('Current Position:', pos);
    setHasCurrentLocation(true);
    setCurrentLocation({ latitude: pos.coords.latitude, longitude: pos.coords.longitude });
  };

  const config = async () => {
    const resf = await Location.requestForegroundPermissionsAsync();
    const resb = await Location.requestBackgroundPermissionsAsync();
    if (resf.status != 'granted' && resb.status !== 'granted') {
      console.log('Permission to access location was denied');
    } else {
      console.log('Permission to access location granted');
      refreshCurrentLocation();
    }
  };

  React.useEffect(() => {
    config();
  }, []);

  if (hasCurrentLocation) {
    return (
      <View style={styles.container}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00521,
          }}
          showsUserLocation={true}
        />
      </View>
    );
  } else {
    return (
      <View style={styles.textContainer}>
        <Text>位置情報取得中...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
});
