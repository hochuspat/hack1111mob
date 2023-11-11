import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Polyline, Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

const screen = Dimensions.get('window');

const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE = 37.78825;
const LONGITUDE = -122.4324;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const routeCoordinates = [
  { latitude: 37.78925, longitude: -122.4324 },
  { latitude: 37.78845, longitude: -122.4344 },
  { latitude: 37.78735, longitude: -122.4364 },
  { latitude: 37.78825, longitude: -122.4324 }
];



const TaskScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     <MapView
        provider={PROVIDER_GOOGLE} 
        style={styles.map}
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }}
      >
       <Polyline
          coordinates={routeCoordinates}
          strokeColor="#000" 
          strokeWidth={6}
        />
  {/* Маркеры для начальной и конечной точки маршрута */}
  <Marker coordinate={routeCoordinates[0]} />
        <Marker coordinate={routeCoordinates[routeCoordinates.length - 1]} />
                </MapView>

<View style={styles.bottomPanel}>
  <Text style={styles.distanceText}>Общее расстояние</Text>
  <Text style={styles.distanceValue}>2 км</Text>
  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Doroga2')} 
>
    <Text style={styles.buttonText}>Приступить к выполнению</Text>
  </TouchableOpacity>
</View>
</View>
);
};  


const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bottomPanel: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: screen.width,
    alignItems: 'center',
  },
  distanceText: {
    fontSize: 16,
    marginBottom: 5,
  },
  distanceValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#BC9175',
    padding: 10,
    borderRadius: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TaskScreen;
