import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons,AntDesign,Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const BottomNavigationBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigationContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Doroga')}>
        <MaterialCommunityIcons name="routes" size={34} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Graf')}>
        <MaterialCommunityIcons name="chart-line" size={34} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
      <Feather name="message-circle" size={34} color="white" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Lk')}>
      <AntDesign name="setting" size={34} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    navigationContainer: {
      flexDirection: 'row',
      backgroundColor: '#343130',
      justifyContent: 'space-around',
      paddingVertical: 20,
      borderTopWidth: 1,
      padding: 10,
      borderTopColor: 'rgba(255, 255, 255, 0.2)',
    },
  });

export default BottomNavigationBar;
