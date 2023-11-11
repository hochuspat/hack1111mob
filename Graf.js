import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { BarChart, PieChart } from 'react-native-chart-kit';

const barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43]
    }
  ]
};

const pieChartData = [
  { name: 'Seoul', population: 21500000, color: 'rgba(188, 110, 100, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Toronto', population: 2800000, color: 'rgba(188, 120, 90, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Beijing', population: 527612, color: 'rgba(188, 130, 80, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'New York', population: 8538000, color: 'rgba(188, 140, 70, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 },
  { name: 'Moscow', population: 11920000, color: 'rgba(188, 150, 60, 1)', legendFontColor: '#7F7F7F', legendFontSize: 15 }
];



const ChartPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Выполненные заявки</Text>
      <BarChart
        data={barChartData}
        width={Dimensions.get('window').width - 30} 
        height={220}
        yAxisLabel="$"
        chartConfig={{
          backgroundColor: '#BC9175',
          backgroundGradientFrom: '#BC9175',
          backgroundGradientTo: '#BC9175',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        style={styles.chart}
      />

      <Text style={styles.headerText}>Эффективность</Text>
      <PieChart
        data={pieChartData}
        width={Dimensions.get('window').width - 30}
        height={220}
        chartConfig={{
          backgroundColor: '#BC9175',
          backgroundGradientFrom: '#BC9175',
          backgroundGradientTo: '#BC9175',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        style={styles.chart}
      />
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
  headerText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  
});

export default ChartPage;