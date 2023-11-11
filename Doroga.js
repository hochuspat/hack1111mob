import React from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; 
import { Feather } from '@expo/vector-icons';

const meetingsData = [
  {
    id: '1',
    shortNumber: 'OSC-3910990023',
    taskName: 'Подписание договора',
    allocatedTime: '24:52',
    startAddress: 'ул. Зиповская 3/4, 1 к. 192',
    endAddress: 'ул. Зиповская 3/4, 1 к. 193',
    clientName: 'Иван Бородачев',
    steps: [
      {
        icon: 'location-exit',
        title: 'Адрес отправления',
        detail: 'ул. Зиповская 3/4, 1 к. 192',
      },
      {
        icon: 'location-enter',
        title: 'Адрес доставки',
        detail: 'ул. Зиповская 3/4, 1 к. 193',
      },
      {
        icon: 'file-document',
        title: 'Статус',
        detail: 'Подписание договора',
      },
      {
        icon: 'check-all',
        title: 'Статус',
        detail: 'Завершение встречи',
      },
    ],
    phone: 'phone',
    sms: 'message-text',
  },
  {
    id: '2',
    shortNumber: 'OSC-3910990023',
    taskName: 'Подписание договора',
    allocatedTime: '24:52',
    startAddress: 'ул. Зиповская 3/4, 1 к. 192',
    endAddress: 'ул. Зиповская 3/4, 1 к. 193',
    clientName: 'Иван Бородачев',
    steps: [
      {
        icon: 'location-exit',
        title: 'Адрес отправления',
        detail: 'ул. Зиповская 3/4, 1 к. 192',
      },
      {
        icon: 'location-enter',
        title: 'Адрес доставки',
        detail: 'ул. Зиповская 3/4, 1 к. 193',
      },
      {
        icon: 'file-document',
        title: 'Статус',
        detail: 'Подписание договора',
      },
      {
        icon: 'check-all',
        title: 'Статус',
        detail: 'Завершение встречи',
      },
    ],
    phone: 'phone',
    sms: 'message-text',
  },];

  const Separator = () => <View style={styles.separator} />;

  const MeetingCard = ({ item, navigate }) => {
    return (
      <TouchableOpacity onPress={() => navigate('Doroga1')}>
        <View style={styles.meetingCard}>
          <View style={styles.meetingHeader}>
            <View>
              <Text style={styles.shortNumber}>{item.shortNumber}</Text>
              <Text style={styles.taskName}>{item.taskName}</Text>
            </View>
            <Text style={styles.allocatedTime}>{item.allocatedTime}</Text>
          </View>
          <Separator />
          {item.steps.map((step, index) => (
            <View key={index} style={styles.stepRow}>
              <View style={styles.iconCircle}>
                <MaterialCommunityIcons name={step.icon} size={20} color="white" />
              </View>
              <View style={styles.stepDetailContainer}>
                <Text style={styles.stepTitle}>{step.title}</Text>
                <Text style={styles.stepDetail}>{step.detail}</Text>
              </View>
            </View>
          ))}
          <Separator />
          <View style={styles.clientInfoContainer}>
            <FontAwesome5 name="user-alt" size={20} color="white" style={styles.userIcon} />
            <Text style={styles.clientName}>{item.clientName}</Text>
            <TouchableOpacity>
              <FontAwesome5 name="phone" size={20} color="white" style={styles.phoneIcon} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Feather name="message-circle" size={20} color="white" style={styles.smsIcon}/>

            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  
  const App = () => {
    const navigation = useNavigation(); 
  
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Встречи на сегодня</Text>
          <FontAwesome5 name="user-circle" size={24} color="white" />
        </View>
        <View style={styles.searchBar}>
          <FontAwesome5 name="search" size={16} color="white" />
          <TextInput placeholder="Поиск" placeholderTextColor="white" style={styles.searchInput} />
        </View>
        <FlatList
          data={meetingsData}
          renderItem={({ item }) => <MeetingCard item={item} navigate={navigation.navigate} />}
          keyExtractor={(item) => item.id}
          style={styles.meetingsList}
        />
      </View>
    );
  };
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222225',
  },  stepDetailContainer: {
    flex: 1,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  taskName: {
    fontSize: 14,
    color: '#BC9175',
    marginBottom: 4,
  },
  dottedLine: {
    height: 1,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    borderStyle: 'dotted',
    marginVertical: 4,
  },
  stepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stepTitle: {
    color: 'white',
    fontSize: 16,
  },
  stepDetail: {
    color: 'white',
    fontSize: 14,
  },
  iconsContainer: {
    flexDirection: 'row',
  },
  contactContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    marginTop: 8,
  },
  contactInfo: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
  },
  contactIcons: {
    flexDirection: 'row',
    width: 50,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 30,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(118, 118, 128, 0.24)',
    borderRadius: 10,
    padding: 7,
    margin: 8,
  },
  searchInput: {
    flex: 1,
    marginLeft: 6,
    color: 'white',
  },
  meetingsList: {
    paddingHorizontal: 8,
  },
  meetingCard: {
    backgroundColor: '#222225',
    borderRadius: 12,
    borderWidth: 3,
    borderColor: '#BC9175',
    padding: 16,
    marginBottom: 8,
  },
  meetingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shortNumber: {
    color: '#BC9175',
    fontSize: 18,
    fontWeight: 'bold',
  },
  allocatedTime: {
    color: '#FFF',
    fontSize: 26,
    fontWeight: '600',
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.3)',
    marginVertical: 8,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#BC9175',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  stepContent: {
    flex: 1,
  },
  stepTitle: {
    color: 'white',
    fontSize: 16,
  },
  stepDetail: {
    color: 'white',
    fontSize: 14,
  },
  clientRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clientDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
  },
  clientName: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },phoneIcon: {
    marginRight: 8,
  },
  taskName: {
    color: '#BC9175',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 4,
  },
  icon: {
    marginLeft: 8,
  },
  clientInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 10,
  },
  meetingHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },  userIcon: {
    marginRight: 8,
  },
});

export default App;
