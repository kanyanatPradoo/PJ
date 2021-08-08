import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeOwnerScreen from './HomeOwnerScreen';
import NotificationOwnerScreen from './NotificationOwnerScreen';
import ExploreOwnerScreen from './ExploreOwnerScreen';
import ProfileOwnerScreen from './ProfileOwnerScreen';
import EditProfileOwnerScreen from './EditProfileOwnerScreen';
import WashPlaceOwnerScreen from './WashPlaceOwnerScreen';


import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';


const HomeOwnerStack = createStackNavigator();
const NotificationOwnerStack = createStackNavigator();
const ProfileOwnerStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabOwnerScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeOwnerStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-home" color='#fff' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Notifications"
      component={NotificationOwnerStackScreen}
      options={{
        tabBarLabel: 'Notifications',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-notifications" color='#fff' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileOwnerStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color='#fff' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Explore"
      component={ExploreOwnerScreen}
      options={{
        tabBarLabel: 'Explore',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color='#fff' size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);

export default MainTabOwnerScreen;

const HomeOwnerStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeOwnerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#35A3A8',
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <HomeOwnerStack.Screen
        name="Home"
        component={HomeOwnerScreen}
        options={{
          title: 'Home',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('NotificationOwnerScreen');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('ProfileOwner');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://i3.wp.com/www.catdumb.com/wp-content/uploads/2019/01/large.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeOwnerStack.Screen
        name="WashPlace"
        component={WashPlaceOwnerScreen}
        options={{
          title: 'WashPlace',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                color={colors.text}
                backgroundColor='#35A3A8'
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{flexDirection: 'row', marginRight: 10}}>
              <Icon.Button
                name="ios-notifications"
                size={30}
                color={colors.text}
                backgroundColor= '#35A3A8'
                onPress={() => {
                  navigation.navigate('NotificationOwnerScreen');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('ProfileOwner');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://i3.wp.com/www.catdumb.com/wp-content/uploads/2019/01/large.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
     
    </HomeOwnerStack.Navigator>
  );
};

const NotificationOwnerStackScreen = ({navigation}) => (
  <NotificationOwnerStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#35A3A8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationOwnerStack.Screen
      name="Notifications"
      component={NotificationOwnerScreen}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            backgroundColor='#35A3A8'
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </NotificationOwnerStack.Navigator>
);

const ProfileOwnerStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileOwnerStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#35A3A8',
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileOwnerStack.Screen
        name="Profile"
        component={ProfileOwnerScreen}
        options={{
          title: 'Profile',
          headerLeft: () => (
            <View style={{marginLeft: 10}}>
              <Icon.Button
                name="ios-menu"
                size={25}
                backgroundColor='#35A3A8'
                color={colors.text}
                onPress={() => navigation.openDrawer()}
              />
            </View>
          ),
          headerRight: () => (
            <View style={{marginRight: 10}}>
              <MaterialCommunityIcons.Button
                name="account-edit"
                size={25}
                backgroundColor='#35A3A8'
                color={colors.text}
                onPress={() => navigation.navigate('EditProfileOwner')}
              />
            </View>
          ),
        }}
      />
      <ProfileOwnerStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileOwnerScreen}
      />
    </ProfileOwnerStack.Navigator>
  );
};

