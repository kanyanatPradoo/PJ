import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  TouchableHighlight,
  Button
} from 'react-native';
import {Avatar,Title,Caption,TouchableRipple,} from 'react-native-paper'
import { useTheme } from '@react-navigation/native';

import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


const HomeOwnerScreen = ({navigation}) => {
  const theme = useTheme();

  return (
 
      <SafeAreaView style={styles.container}>   
      <ScrollView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row',marginTop: 30}}>
            <Avatar.Image
              source={{
                uri:'https://i3.wp.com/www.catdumb.com/wp-content/uploads/2019/01/large.jpg',
              }}
              size={90}
              />
              <View style={{marginLeft: 25}}>
                <Title style={styles.title, {
                  marginTop:15,
                  marginBottom: 3,
                }}>Lalisa Manoban</Title>
                <Caption style={styles.caption}>@Li_saaaaaaaaaaaaaa</Caption>
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
      

      <View style={styles.infoBoxWrapper2}>
      <View style={styles.Image}>
     
      <Animatable.Image 
      animation="bounceIn"
      duraton="1500"
        source={require('../assets/banners/Energy-Efficient-Washing-Machine-removebg-preview.png')}
  
         style={styles.logo}
          resizeMode="stretch"
            />
           
      </View>
       
          <Text style={{
            marginRight:150,
            marginLeft:15,
            marginBottom:60,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>บริการเครื่องซักผ้า</Text>
      <View style={styles.infoBoxWash}>
      <Text style={{
            marginLeft:15,
            marginBottom:4,
            alignSelf: 'center',
            fontSize: 18,
            color: '#000',
          }}>ซักเลย</Text>
          <View style={styles.Iconnex1}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="chevron-right" size={50} color="#fff" 
            onPress={() => navigation.navigate("WashPlace")}
          />
          </View>

          
      </View>
     
      </View>
      
      
     
        
       <View style={styles.cardsWrapper}>
         <Text
          style={{
            marginRight:200,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>

          USING HISTORY
        </Text>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8"  
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          onPress={() => navigation.navigate("Explore")}
          >หอพักลักษณานิเวศ 1</Text>
          
          <Text style={styles.cardDetails}>
          12/12/2020
            </Text>
            <Text style={styles.cardDetails1}>
          20 ฿
            </Text>
      </View>
      </View>

      <View style={styles.cardsWrapper}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#35A3A8" 
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          onPress={() => navigation.navigate("WashPlace")}
          >หอพักลักษณานิเวศ 1</Text>
          <Text style={styles.cardDetails}>
          12/12/2020
            </Text>
            <Text style={styles.cardDetails1}>
          20 ฿
            </Text>
      </View>
      </View>
  

        <View style={styles.Icondot}>
            <MaterialCommunityIcons style={styles.chipsIcon} name="dots-horizontal" size={40} color="#000" 
            onPress={() => navigation.navigate("History")}
          />
          
          </View>

 


    </ScrollView>
    </SafeAreaView>
  );
};

export default HomeOwnerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
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
    marginLeft:-15,
  },
  Iconnex1: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginRight:10,
    marginLeft:3,
    marginTop:35,
    marginBottom:10,
  },
  Icondot: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 50,
    marginRight:25,
    marginLeft:20,
    marginTop:30,
    marginBottom:50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 30,
    marginLeft:30,
    color: '#de4f35',
    fontWeight: 'bold',
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
 
  cardDetails: {
    fontSize: 14,
    color: '#000',
    marginTop: 35,
    marginRight:120,
    marginLeft:-148,
  },
  cardDetails1: {
    fontSize: 14,
    color: '#000',
    marginTop:55,
    marginLeft:-195,
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
  infoBoxWash:{
    flexDirection: 'row',
    color:'#000',
    width: 120,
    height: 35,
    backgroundColor: '#9BD9D9',
    borderRadius: 30,
    marginRight:500,
    marginLeft:-320,
    marginBottom:60,
    marginTop:60,
  },
  infoBoxWrapper2: {
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 120,
    backgroundColor: '#35A3A8',
    borderRadius: 10,
    marginRight:6,
    marginLeft:7,
    marginTop:30,
    marginBottom:30,
    
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 160,
    height: 100,
    marginTop:-10,
    marginRight:-550,
},
  
});
