import React, { useState, useEffect } from 'react';

// import all the components we are going to use
import { SafeAreaView,ScrollView, StyleSheet, Text, View } from 'react-native';

//import SearchableDropdown component
import SearchableDropdown from 'react-native-searchable-dropdown';
import {Avatar,Title,Caption,TouchableRipple,Dimensions} from 'react-native-paper'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//Item array for the dropdown
const items = [
  //name key is must.It is to show the text in front
  { id: 1, name: 'L01' },
  { id: 2, name: 'L02' },
  { id: 3, name: 'L03' },
  { id: 4, name: 'L04' },
  { id: 5, name: 'L05' },
  { id: 6, name: 'L07' },
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

      
      <View style={styles.BoxUse}>  
        <Text style={{
            marginRight:-207,
            marginLeft:10,
            marginBottom:0,
            alignSelf: 'center',
            fontSize: 16,
            fontWeight: 'bold',
            color: '#636363',
          }} 
          
          >เพิ่มเครื่องซักผ้า
          </Text>
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
      <Text style={styles.headingText}>
          สถานที่ตั้งเครื่องซักผ้า (LXX)
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
          placeholder="LXX"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        <Text style={styles.headingText}>
           หมายเลขเครื่องซักผ้า (LXX-XXX)
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
          placeholder="LXX-XXX"
          //place holder for the search input
          resetValue={false}
          //reset textInput Value with true and false state
          underlineColorAndroid="transparent"
          //To remove the underline from the android input
        />
        </ScrollView>
    
    
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
    color:'#000'
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
 
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
  BoxUse:{
    flexDirection: 'row',
    color:'#000',
    width: 130,
    height: 50,
    backgroundColor: '#cfcfcf',
    borderRadius: 0,
    marginRight:10,
    marginLeft:54,
    marginTop:10,
    marginBottom:30,
},
  BoxUse2:{
    flexDirection: 'row',
    color:'#000',
    width: 370,
    height: 60,
    backgroundColor: '#F0F0F0',
    borderRadius: 70,
    marginRight:60,
    marginLeft:1,
    marginTop:0,
    marginBottom:20,
},
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  titleText: {
    padding: 8,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  headingText: {
    padding: 8,
  },
});
