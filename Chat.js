import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';

const chatData = [
  { id: '1', userName: 'Иван Иванов', lastMessage: 'Привет! Как дела?', avatarUrl: 'https://sun9-37.userapi.com/impg/d1HX1olAzlPX8frQjmiRLyqH5DoKgyfeIt05sA/65l7_KhkhZs.jpg?size=720x1080&quality=95&sign=c0a32ea2a9aea1974a8264ff269db990&type=album' },
  { id: '2', userName: 'Петр Петров', lastMessage: 'Давай встретимся завтра.', avatarUrl: 'https://sun9-37.userapi.com/impg/d1HX1olAzlPX8frQjmiRLyqH5DoKgyfeIt05sA/65l7_KhkhZs.jpg?size=720x1080&quality=95&sign=c0a32ea2a9aea1974a8264ff269db990&type=album' },
];

const ChatPage = () => {
  const renderChatItem = ({ item }) => (
    <TouchableOpacity style={styles.chatItem}>
      <Image source={{ uri: item.avatarUrl }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <Text style={styles.userName}>{item.userName}</Text>
        <Text style={styles.lastMessage}>{item.lastMessage}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Чаты</Text>
      <FlatList
        data={chatData}
        renderItem={renderChatItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222225',
  },
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  chatItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.1)',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chatInfo: {
    justifyContent: 'center',
  },
  userName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: 'gray',
    fontSize: 14,
  },
});

export default ChatPage;
