import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ProfilePage = () => {

  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={{ uri: 'https://sun9-37.userapi.com/impg/d1HX1olAzlPX8frQjmiRLyqH5DoKgyfeIt05sA/65l7_KhkhZs.jpg?size=720x1080&quality=95&sign=c0a32ea2a9aea1974a8264ff269db990&type=album' }} 
          style={styles.profileAvatar}
        />
        <Text style={styles.profileName}>Иван Иванов</Text>
      </View>

      <View style={styles.profileDetails}>
        <Text style={styles.profileDetailText}>Email: ivan@example.com</Text>
        <Text style={styles.profileDetailText}>Город: Москва</Text>
        <Text style={styles.profileDetailText}>Профессия: Аналитик</Text>
      </View>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Редактировать профиль</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222225',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileAvatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileDetails: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    margin: 20,
    width: '90%',
  },
  profileDetailText: {
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },
  actionButton: {
    backgroundColor: '#BC9175',
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    width: '90%',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilePage;
