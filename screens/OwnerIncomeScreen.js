
import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';

import {BarChart} from 'react-native-chart-kit';

const MyBarChart = () => {
  return (
    <>

      <View style={styles.BoxUse}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:0,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>สถิติรายได้</Text>
       
      </View>
      <Text style={styles.header}></Text>
      <BarChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June','July'],
          datasets: [
            {
              data: [1350, 2600, 1000, 580, 900, 430,560],
            },
          ],
        }}
        width={Dimensions.get('window').width - 20}
        height={600}
        yAxisLabel={'฿'}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          decimalPlaces: 2,
          color: (opacity = 1) => 'rgba(0, 0, 0, 3)',
          style: {
            borderRadius: 40,
            
          },
        }}
        
      />
    </>
  );
};
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <MyBarChart />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: 10,
  },
  header: {
    marginTop: 14,
  },
  BoxUse:{
    flexDirection: 'row',
    color:'#000',
    width: 250,
    height: 40,
    backgroundColor: '#AFDFE1',
    borderRadius: 10,
    marginRight:0,
    marginLeft:-0,
    marginTop:10,
    marginBottom:30,
},
});
