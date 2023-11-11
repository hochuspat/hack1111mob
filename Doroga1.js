import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions,Image } from 'react-native';
import MapView from 'react-native-maps';
import { MaterialCommunityIcons,FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TaskScreen = () => {
  const navigation = useNavigation();
    return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>OSC-3910990023</Text>
      </View>

      <View style={styles.iconsContainer}>
  <View style={styles.iconCircleFirst}> 
    <MaterialCommunityIcons name="location-exit" size={30} color="white" />
  </View>
  <View style={styles.iconCircle}>
    <MaterialCommunityIcons name="location-enter" size={30} color="white" />
  </View>
  <View style={styles.iconCircle}>
    <MaterialCommunityIcons name="file-document" size={30} color="white" />
  </View>
  <View style={styles.iconCircle}>
    <MaterialCommunityIcons name="check-all" size={30} color="white" />
  </View>
</View>


      <View style={styles.mapContainer}>
        <View style={styles.mapHeader}>
          <Text style={styles.mapTitle}>Адрес встречи</Text>
          <MaterialCommunityIcons name="map-marker-radius" size={24} color="white" />
        </View>
        <MapView
          style={styles.map}
          customMapStyle={greyMapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>    
      <View style={styles.clientContainer}>
        <Image
          source={{ uri: 'https://sun9-37.userapi.com/impg/d1HX1olAzlPX8frQjmiRLyqH5DoKgyfeIt05sA/65l7_KhkhZs.jpg?size=720x1080&quality=95&sign=c0a32ea2a9aea1974a8264ff269db990&type=album' }} 
          style={styles.clientImage}
        />
        <Text style={styles.clientName}>Иван Бородачев</Text>
        <FontAwesome5 name="envelope" size={20} color="#BC9175" />
      </View>

      <TouchableOpacity 
  style={styles.actionButton}
  onPress={() => navigation.navigate('Doroga3')} 
>
  <Text style={styles.actionButtonText}>Приступить к выполнению</Text>
</TouchableOpacity>


      <TouchableOpacity>
        <Text style={styles.secondaryActionText}>Возникла проблема?</Text>
      </TouchableOpacity>


    </View>
  );
};
const greyMapStyle = [
  {
    featureType: "all",
    elementType: "all",
    stylers: [{ saturation: -100 }, { gamma: 0.5 }]
  }
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222225',
  },
  header: {
    alignItems: 'center',
    marginTop: 20,
  },
iconCircleFirst: {
  width: 50,
  height: 50,
  borderRadius: 25,
  backgroundColor: '#BC9175', 
  justifyContent: 'center',
  alignItems: 'center',
},

  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#222225',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    marginVertical: 20,
  },iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
 mapContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.10)',

  },
  mapHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  mapTitle: {
    color: 'white',
    fontSize: 16,
  },
  mapIcon: {
    padding: 10,
  },
  map: {
    height: 200,
    width: Dimensions.get('window').width - 40, 
  },
  clientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
    margin: 20,
  },
  clientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  clientName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
  actionButton: {
    backgroundColor: '#BC9175',
    borderRadius: 10,
    padding: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryActionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  commentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255, 255, 255, 0.2)',
    padding: 10,
    marginHorizontal: 20,
  },
  commentText: {
    color: 'white',
    marginLeft: 10,
  },
});

export default TaskScreen;
