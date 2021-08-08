import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image

} from 'react-native';
import {Avatar,Title,Caption,TouchableRipple,} from 'react-native-paper'
import { useTheme } from '@react-navigation/native';
import SearchableDropdown from 'react-native-searchable-dropdown';

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';


const items = [
  //name key is must.It is to show the text in front
  { id: 1, name: 'โหมดผ้าฝ้ายแบบประหยัด(cotton Eco)' },
  { id: 2, name: 'โหมดชุดเครื่องนอน(Duvet)' },
  { id: 3, name: 'โหมดผ้าสี(Dark wash)' },
  { id: 4, name: 'โหมดผ้าสี(Dark wash)' },
  { id: 5, name: 'โหมดผ้าขนสัตว์  (Wool)' },
  { id: 6, name: 'โหมด Incentive 60' },
  { id: 6, name: 'โหมด Quick 30' },
  { id: 6, name: 'โหมดชุดกีฬา(Sport Wear)' },
];

const App = ({navigation}) => {
  //Data Source for the SearchableDropdown
  const [serverData, setServerData] = useState([]);

  useEffect(() => {
    fetch('https://aboutreact.herokuapp.com/demosearchables.php')
      .then((response) => response.json())
      .then((responseJson) => {
        //Successful response from the API Call
        setServerData(responseJson.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  
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
            marginRight:270,
            marginTop:40,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          STATUS
        </Text>
        
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
        <Text style={styles.headingText}>
           เลือกโหมดการซัก
        </Text>
        <SearchableDropdown
          onTextChange={(text) => console.log(text)}
          //On text change listner on the searchable input
          onItemSelect={(item) => alert(JSON.stringify(item))}
          //onItemSelect called after the selection from the dropdown
          containerStyle={{ padding: 5 }}
          //suggestion container style
          textInputStyle={{
            //inserted text style
            padding: 12,
            borderWidth: 1,
            borderColor: '#ccc',
            backgroundColor: '#FAF7F6',
          }}
          itemStyle={{
            //single dropdown item style
            padding: 10,
            marginTop: 2,
            backgroundColor: '#FAF9F8',
            borderColor: '#bbb',
            borderWidth: 1,
          }}
          itemTextStyle={{
            //text style of a single dropdown item
            color: '#222',
          }}
          itemsContainerStyle={{
            //items container style you can pass maxHeight
            //to restrict the items dropdown hieght
            maxHeight: '60%',
          }}
          items={items}
          //mapping of item array
          defaultIndex={2}
          //default selected item index
          placeholder="เลือกโหมดการซัก"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
    </ScrollView>
    </SafeAreaView>
  );
};

export default App;

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
  headingText: {
    padding: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 40,
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
