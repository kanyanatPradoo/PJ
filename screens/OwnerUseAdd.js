import React from 'react';
import { View, Text, Button, StyleSheet,screenWidth, StatusBar,SafeAreaView,ScrollView,chartConfig  } from 'react-native';
import { useTheme } from '@react-navigation/native';
import {Avatar,Title,Caption,TouchableRipple,Dimensions} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

    
const OwnerUseAdd = ({navigation}) => {

  

    return (
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
            <Title>120</Title>
            <Caption>เครื่องซักผ้าทั้งหมด</Caption>
          </View>
      </View> 

      <View style={styles.cardsWrapper}>
         <Text
          style={{
            marginRight:180,
            marginTop:10,
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#000',
          }}>WashPlace
          </Text>
           <View style={styles.categoryIcon1}>  
            <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={40} color="#35A3A8" 
          />
</View>
          
          </View>


      <View style={styles.cardsWrapper}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={50} color="#35A3A8" 
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          onPress={() => navigation.navigate("WashPlace")}
          >หอพักลักษณานิเวศ 1</Text>
          <Text style={styles.cardDetails}>
          10 เครื่อง
            </Text>
          
      </View>
      </View>
      <View style={styles.cardsWrapper}>
        <View style={styles.categoryContainer}>
          <View style={styles.categoryIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={50} color="#35A3A8" 
            />
          </View>
          <Text style={styles.categoryBtnTxt}
          onPress={() => navigation.navigate("WashPlace")}
          >หอพักลักษณานิเวศ 2</Text>
          <Text style={styles.cardDetails}>
          10 เครื่อง
            </Text>
          
      </View>
      </View>

      <View style={styles.BoxUse}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:0,
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000',
          }} onPress={() => navigation.navigate("OwnerAdd")}>
          
          เพิ่มเครื่องซักผ้า</Text>
       <View style={[styles.infoBox, {
            borderRightColor: '#000',
            borderRightWidth: 3,
            height : 50,
            marginTop:0,
            marginBottom:0,
            marginLeft:154,
            
          }]}>

          </View>
<View style={styles.BoxUse1}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:0,
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#000',
          }}>ลดเครื่องซักผ้า</Text>

      </View>
      </View>

</ScrollView>
    )
};

export default OwnerUseAdd;
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
  cardDetails1: {
    fontSize: 14,
    color: '#000',
    marginTop:55,
    marginLeft:-195,
  },
  cardDetails: {
    fontSize: 14,
    color: '#000',
    marginTop: 35,
    marginRight:120,
    marginLeft:-148,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    fontSize: 16,
    marginBottom: 30,
    marginLeft:30,
    color: '#de4f35',
    fontWeight: 'bold',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
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
    marginTop:-20,
  },
  categoryIcon1: {
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
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
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
    width: 130,
    height: 50,
    backgroundColor: '#35A3A8',
    borderRadius: 0,
    marginRight:10,
    marginLeft:67,
    marginTop:20,
    marginBottom:30,
},
BoxUse1:{
    flexDirection: 'row',
    color:'#000',
    width: 130,
    height: 50,
    backgroundColor: '#35A3A8',
    borderRadius: 0,
    marginRight:50,
    marginLeft:0,
    marginTop:0,
    marginBottom:50,
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