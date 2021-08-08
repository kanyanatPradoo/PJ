import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,

} from 'react-native';
import {Avatar,Title,Caption,TouchableRipple,} from 'react-native-paper'
import { useTheme } from '@react-navigation/native';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const L01Screen = ({navigation}) => {
  const theme = useTheme();

  return (
 
      <SafeAreaView style={styles.container}>   
      <ScrollView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row',marginTop: 30}}>
            <Avatar.Image
              source={{
                uri:'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
              }}
              size={90}
              />
              <View style={{marginLeft: 25}}>
                <Title style={styles.title, {
                  marginTop:15,
                  marginBottom: 3,
                }}>Lalisa Manoban</Title>
                <Caption style={styles.caption}>@Li_sa</Caption>
              </View>
          </View>
        </View>

      <View style={styles.infoBoxWrapper}>
          <View style={[styles.infoBox, {
            borderRightColor: '#000',
            borderRightWidth: 2
          }]}>
            <Title>140.50฿</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Points</Caption>
          </View>
      </View>
       
      
         <Text
          style={{
            marginRight:90,
            marginTop:40,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          หอพักลักษณานิเวศ 1
        </Text>
        
        <View style={styles.Icon}>  
            <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker" size={40} color="#de4f35" 
          />
</View>
<View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8"  
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          onPress={() => navigation.navigate("L01")}
          >20 ฿</Text>
      </View>
      <Text
          style={{
            marginRight:265,
            marginTop:-5,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>
          L01-001
        </Text>

      
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8" 
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          >30 ฿</Text>
      </View>

      <Text
          style={{
            marginRight:265,
            marginTop:-5,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>
          L01-002
        </Text>
  
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8" 
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          >30 ฿</Text>
      </View>

      <Text
          style={{
            marginRight:265,
            marginTop:-5,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>
          L01-003
        </Text>


<View>
        <View style={styles.BoxStatus}>
        <Text
          style={{
            marginRight:10,
            marginLeft:30,
            marginTop:0,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
            
          }}onPress={() => navigation.navigate("Status")}>
          
          ว่าง
        </Text>

            </View>

            <View style={styles.BoxStatus1}>
            <Text
          style={{
            marginRight:5,
            marginLeft:17,
            marginTop:0,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#696969',
          }} onPress={() => navigation.navigate("Status")}>
         
          ไม่ว่าง
        </Text>

            </View>

            <View style={styles.BoxStatus2}>
            <Text
          style={{
            marginRight:5,
            marginLeft:17,
            marginTop:0,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#696969',
          }}onPress={() => navigation.navigate("Status")}>
          
          ไม่ว่าง
        </Text>

            </View>
</View>

    </ScrollView>
    </SafeAreaView>
  );
};

export default L01Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  categoryIcon1: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    marginRight:0,
    marginLeft:0,
    marginTop:10,
    marginBottom:11,
  },
  categoryIcon2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginRight:0,
    marginLeft:0,
    marginTop:20,
    marginBottom:10,
  },
  mapIcon1: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginRight:0,
    marginLeft:-40,
    marginTop:20,
    marginBottom:0,
  },
Icon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        marginRight:320,
        marginLeft:-15,
        marginTop:-47,
      
  },
  BoxStatus:{
    flexDirection: 'row',
    color:'#000',
    width: 90,
    height: 35,
    backgroundColor: '#99d1c9',
    borderRadius: 10,
    marginRight:6,
    marginLeft:270,
    marginTop:-300,
    marginBottom:300,
  },
  BoxStatus1:{
    flexDirection: 'row',
    color:'#000',
    width: 90,
    height: 35,
    backgroundColor: '#c7c7c7',
    borderRadius: 10,
    marginRight:6,
    marginLeft:270,
    marginTop:-225,
    marginBottom:300,
  },
  BoxStatus2:{
    flexDirection: 'row',
    color:'#000',
    width: 90,
    height: 35,
    backgroundColor: '#c7c7c7',
    borderRadius: 10,
    marginRight:6,
    marginLeft:270,
    marginTop:-225,
    marginBottom:300,
  },
  mapIcon2: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginRight:0,
    marginLeft:-40,
    marginTop:20,
    marginBottom:0,
  },
  categoryBtnTxt1: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 40,
    marginLeft:40,
    color: '#de4f35',
    fontWeight: 'bold',
  },
  categoryBtnTxt2: {
    alignSelf: 'center',
    fontSize: 18,
    marginBottom: 40,
    marginLeft:20,
    color: '#de4f35',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color:'#000'
  },
    infoBoxWrapper: {
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 30,
    marginRight:5,
    marginLeft:5,
    
  },
  infoBoxWrapper2: {
    flexDirection: 'row',
    color:'#000',
    width: 356,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight:10,
    marginLeft:18,
    marginBottom:15,
    marginTop:10,
    
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 0,
    marginLeft:70,
    color: '#de4f35',
    fontWeight: 'bold',
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#DEDEDE',
    borderRadius: 50,
    marginRight:0,
    marginLeft:5,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  infoBoxWrapper3: {
    flexDirection: 'row',
    color:'#000',
    width: 356,
    height: 80,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight:10,
    marginLeft:18,
    marginBottom:15,
    marginTop:10,
    
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
