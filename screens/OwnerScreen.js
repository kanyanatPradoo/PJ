import React from 'react';
import { View, Text, Button, StyleSheet,screenWidth, StatusBar,SafeAreaView,ScrollView,chartConfig  } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {Avatar,Title,Caption,TouchableRipple,Dimensions} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

    
const OwnerScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>   
        <ScrollView style={styles.container}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection:'row',marginTop: 30}}>
              <Avatar.Image
                source={{
                  uri:'https://www.hallyukstar.com/wp-content/uploads/2018/02/yang-hyunsuk-2018.jpg',
                }}
                size={90}
                />
                <View style={{marginLeft: 25}}>
                  <Title style={styles.title, {
                    marginTop:15,
                    marginBottom: 3,
                  }}>Yang Hyunsuk</Title>
                  <Caption style={styles.caption}>@Yang</Caption>
                </View>
            </View>
          </View>
          <View style={styles.BoxUse2}>
          <View style={[styles.infoBox, {
            borderRightColor: '#000',
            borderRightWidth: 2
          }]}>
            <Title>1350 ฿</Title>
            <Caption>Wallet</Caption>
          </View>
          <View style={styles.infoBox}>
            <Title>12</Title>
            <Caption>Points</Caption>
          </View>
      </View>

        <View style={styles.BoxUse}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:130,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>สถิติการใช้งานทั้งหมด</Text>
       <View style={[styles.infoBox, {
            borderRightColor: '#000',
            borderRightWidth: 2,
            height : 130,
            marginTop:50,
          }]}>
              <View style={styles.categoryIcon}>
               <MaterialCommunityIcons style={styles.chipsIcon} name="washing-machine" size={50} color="#000" 
          />
          </View>
            <Title>10 เครื่อง</Title>
            <Caption>จำนวนเครื่อง</Caption>
          </View>
          <View style={[styles.infoBox, {
            height : 130,
            marginTop:50,
          }]}>
              <View style={styles.categoryIcon}>
              <MaterialCommunityIcons style={styles.chipsIcon} name="graphql" size={50} color="#000" 
          />    

          </View>
            <Title>285 ครั้ง</Title>
            <Caption>การใช้งานเครื่องซักผ้ารวม</Caption>
          </View>

      </View>


        <View style={styles.BoxUselast}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:0,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
        }} onPress={() => navigation.navigate("OwnerIncome")}>

        สถิติรายได้
        
       </Text>
       
       </View>

        <View style={styles.BoxUselast1}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:0,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
        }} onPress={() => navigation.navigate("OwnerUse")}>
              
       
        สถิติการใช้งานเครื่องซักผ้า
       </Text>
       </View>

       <View style={styles.Boxadd}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:0,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
        }} onPress={() => navigation.navigate("OwnerUseAdd")}>
              
       
        เพิ่ม/ลด เครื่องซักผ้า
       </Text>
       </View>

        
</ScrollView>
        </SafeAreaView>
    )
};

export default OwnerScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
  },
  categoryIcon: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10,
    marginLeft:10,
  },
  categoryIconMoney: {
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10,
    marginLeft:10,
    marginTop:5,
    marginBottom:10,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color:'#fff'
  },
  cardsWrapper: {
    marginTop: 5,
    width: '90%',
    alignSelf: 'center',
  },
 
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
 
  },
  BoxUse:{
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 180,
    backgroundColor: '#35A3A8',
    borderRadius: 10,
    marginRight:6,
    marginLeft:7,
    marginTop:20,
    marginBottom:30,
},
BoxUselast:{
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 80,
    backgroundColor: '#AFDFE1',
    borderRadius: 10,
    marginRight:10,
    marginLeft:7,
    marginTop:0,
    marginBottom:30,
},
Boxadd:{
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 80,
    backgroundColor: '#AFDFE1',
    borderRadius: 10,
    marginRight:10,
    marginLeft:7,
    marginTop:-20,
    marginBottom:30,
},
BoxUselast1:{
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 80,
    backgroundColor: '#AFDFE1',
    borderRadius: 10,
    marginRight:10,
    marginLeft:7,
    marginTop:-20,
    marginBottom:30,
},
BoxUse2:{
    flexDirection: 'row',
    color:'#000',
    width: 380,
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    marginRight:6,
    marginLeft:7,
    marginTop:0,
    marginBottom:20,
},


});