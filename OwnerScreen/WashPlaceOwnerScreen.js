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

import Swiper from 'react-native-swiper';
import * as Animatable from 'react-native-animatable';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StarRating from '../components/StarRating';

const WashPlaceScreen = ({navigation}) => {
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
            marginRight:180,
            marginTop:40,
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          LOCATION
        </Text>
        
        <View style={styles.mapIcon}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker" size={30} color="#F70606" 
           />
           </View>
        <View style={styles.infoBoxWrapper2}>
        <View style={styles.categoryIcon1}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={70} color="#196A6A" 
            />
             </View>
          <Text style={styles.categoryBtnTxt1}
          onPress={() => navigation.navigate("Profile")}
          >หอพักลักษณานิเวศ 1</Text> 
          <Text style={{
              marginRight:50,
              marginLeft:-166,
              marginTop:20,
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
          }}
          
          >2.5 Km</Text>
          <View style={styles.mapIcon1}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker-radius" size={20} color="#196A6A" 
           onPress={() => navigation.navigate("Explore")} 
           />
          </View>
          </View>

          

      <View style={styles.infoBoxWrapper3}>  
      <View style={styles.categoryIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={70} color="#196A6A" 
            />
             </View>
          <Text style={styles.categoryBtnTxt2}
          onPress={() => navigation.navigate("Profile")}
          >หอพักลักษณานิเวศ 1</Text>
   <Text style={{
              marginRight:50,
              marginLeft:-166,
              marginTop:20,
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
          }}
          
          >2.5 Km</Text>
          <View style={styles.mapIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker-radius" size={20} color="#196A6A" 
           onPress={() => navigation.navigate("Explore")} 
           />
          </View>
      </View>
      <View style={styles.infoBoxWrapper3}>  
      <View style={styles.categoryIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={70} color="#196A6A" 
            />
             </View>
          <Text style={styles.categoryBtnTxt2}
          onPress={() => navigation.navigate("Profile")}
          >หอพักลักษณานิเวศ 1</Text>
   <Text style={{
              marginRight:50,
              marginLeft:-166,
              marginTop:20,
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
          }}
          
          >2.5 Km</Text>
          <View style={styles.mapIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker-radius" size={20} color="#196A6A" 
           onPress={() => navigation.navigate("Explore")} 
           />
          </View>
      </View>
      <View style={styles.infoBoxWrapper3}>  
      <View style={styles.categoryIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="home-circle" size={70} color="#196A6A" 
            />
             </View>
          <Text style={styles.categoryBtnTxt2}
          onPress={() => navigation.navigate("Profile")}
          >หอพักลักษณานิเวศ 1</Text>
   <Text style={{
              marginRight:50,
              marginLeft:-166,
              marginTop:20,
              alignSelf: 'center',
              fontSize: 16,
              fontWeight: 'bold',
              color: '#000',
          }}
          
          >2.5 Km</Text>
          <View style={styles.mapIcon2}>
          <MaterialCommunityIcons style={styles.chipsIcon} name="map-marker-radius" size={20} color="#196A6A" 
           onPress={() => navigation.navigate("Explore")} 
           />
          </View>
      </View>
  
    </ScrollView>
    </SafeAreaView>
  );
};

export default WashPlaceScreen;

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
  mapIcon: {
    borderRadius: 50,
    marginRight:30,
    marginLeft:20,
    marginTop:-30,
    marginBottom:10,
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
    marginLeft:20,
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
    marginTop:20,
    
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
