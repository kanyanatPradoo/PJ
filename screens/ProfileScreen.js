import React from 'react';
import { View, Text, Button, StyleSheet,SafeAreaView } from 'react-native';
import {Avatar,Title,Caption,TouchableRipple,} from 'react-native-paper'

import Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import Share from 'react-native-share';

//import files from '../assets/filesBase64';


const ProfileScreen = () => {
  const myCustomShare = async() => {
    const shareOptions = {
      message: 'Order your next meal from FoodFinder App. I\'ve already ordered more than 10 meals on it.',
      url: files.appLogo,
      // urls: [files.image1, files.image2]
    }

    try {
      const ShareResponse = await Share.open(shareOptions);
      console.log(JSON.stringify(ShareResponse));
    } catch(error) {
      console.log('Error => ', error);
    }
  };
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.userInfoSection}>
          <View style={{flexDirection:'row',marginTop: 15}}>
            <Avatar.Image
              source={{
                uri:'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
              }}
              size={90}
              />
              <View style={{marginLeft: 25}}>
                <Title style={styles.title, {
                  marginTop:15,
                  marginBottom: 10,
                }}>Lalisa Manoban</Title>
                <Caption style={styles.caption}>@Li_sa</Caption>
              </View>
          </View>
        </View>

        <View styles={styles.userInfoSection}>
          <View style={styles.row}>
          <Icon name="phone" color="#000" size={20}/>
          <Text style={{color:"#000", marginLeft: 25}}>+91-900000009</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#000" size={20}/>
          <Text style={{color:"#000", marginLeft: 25}}>Li_Sa@email.com</Text>
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

      <View style={styles.menuWrapper}>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="credit-card" color="#000" size={25}/>
            <Text style={styles.menuItemText}>Payment</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="share-outline" color="#000" size={25}/>
            <Text style={styles.menuItemText}>ประวัติการใช้งาน</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="account-check-outline" color="#000" size={25}/>
            <Text style={styles.menuItemText}>สะสมแต้ม</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="heart-outline" color="#000" size={25}/>
            <Text style={styles.menuItemText}>แจ้งปัญหา</Text>
          </View>
        </TouchableRipple>
        <TouchableRipple onPress={() => {}}>
          <View style={styles.menuItem}>
            <Icon name="settings-outline" color="#000" size={25}/>
            <Text style={styles.menuItemText}>การตั้งค่า</Text>
          </View>
        </TouchableRipple>
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color:'#000'
  },
  row: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  infoBoxWrapper: {
    borderBottomColor: '#000',
    borderBottomWidth: 5,
    borderTopColor: '#000',
    borderTopWidth: 5,
    flexDirection: 'row',
    height: 100,
    color:'#000'
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#000',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});