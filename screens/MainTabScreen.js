import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './HomeScreen';
import NotificationScreen from './NotificationScreen';
import ExploreScreen from './ExploreScreen';
import OwnerScreen from './OwnerScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import WashPlaceScreen from './WashPlaceScreen';
import HistoryScreen from './HistoryScreen';
import OwnerIncomeScreen from './OwnerIncomeScreen';
import OwnerUseScreen from './OwnerUseScreen';
import OwnerUseAdd from './OwnerUseAdd';
import OwnerAddScreen from './OwnerAddScreen';
import L01Screen from './L01Screen';
import StatusScreen from './StatusScreen';

import {useTheme, Avatar} from 'react-native-paper';
import {View} from 'react-native-animatable';
import {TouchableOpacity} from 'react-native-gesture-handler';

const HomeStack = createStackNavigator();
const NotificationStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const OwnerStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  <Tab.Navigator initialRouteName="Home" activeColor="#fff">
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
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
      component={NotificationStackScreen}
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
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-person" color='#fff' size={26} />
        ),
      }}
    />
    <Tab.Screen
      name="Owner"
      component={OwnerStackScreen}
      options={{
        tabBarLabel: 'Owner',
        tabBarColor: '#35A3A8',
        tabBarIcon: ({color}) => (
          <Icon name="ios-aperture" color='#fff' size={26} />
        ),
      }}
    />
  </Tab.Navigator>
  
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <HomeStack.Navigator
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
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
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
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      
      
      <HomeStack.Screen
        name="WashPlace"
        component={WashPlaceScreen}
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
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="L01"
        component={L01Screen}
        options={{
          title: 'หอพักลักษณานิเวศ 1',
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
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Status"
        component={StatusScreen}
        options={{
          title: 'L01-001',
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
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'History',
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
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      <HomeStack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          title: 'Explore',
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
                  navigation.navigate('Notification');
                }}
              />
              <TouchableOpacity
                style={{paddingHorizontal: 10, marginTop: 8}}
                onPress={() => {
                  navigation.navigate('Profile');
                }}>
                <Avatar.Image
                  source={{
                    uri:
                      'https://s359.kapook.com/pagebuilder/382e3aa7-c99e-46db-9a06-b13c95cf476a.jpg',
                  }}
                  size={30}
                />
              </TouchableOpacity>
            </View>
          ),
        }}
      />
      
     
    </HomeStack.Navigator>
  );
};

const NotificationStackScreen = ({navigation}) => (
  <NotificationStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#35A3A8',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}>
    <NotificationStack.Screen
      name="Notifications"
      component={NotificationScreen}
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
  </NotificationStack.Navigator>
);


const ProfileStackScreen = ({navigation}) => {
  const {colors} = useTheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#35A3A8',
          shadowColor: colors.background, // iOS
          elevation: 0, // Android
        },
        headerTintColor: colors.text,
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
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
                onPress={() => navigation.navigate('EditProfile')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );


      };

const OwnerStackScreen = ({navigation}) => {
  const {colors} = useTheme();
      
  return (
    <OwnerStack.Navigator
      screenOptions={{
      headerStyle: {
          backgroundColor: '#35A3A8',
                shadowColor: colors.background, // iOS
                elevation: 0, // Android
              },
              headerTintColor: colors.text,
            }}>
            <OwnerStack.Screen
              name="Owner"
              component={OwnerScreen}
              options={{
                title: 'Owner',
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
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Icon.Button
                      name="ios-notifications"
                      size={30}
                      color={colors.text}
                      backgroundColor= '#35A3A8'
                      onPress={() => {
                        navigation.navigate('Notification');
                      }}
                    />
                    <TouchableOpacity
                      style={{paddingHorizontal: 10, marginTop: 8}}
                      onPress={() => {
                        navigation.navigate('Profile');
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
            <OwnerStack.Screen
              name="OwnerIncome"
              component={OwnerIncomeScreen}
              options={{
                title: 'OwnerIncome',
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
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Icon.Button
                      name="ios-notifications"
                      size={30}
                      color={colors.text}
                      backgroundColor= '#35A3A8'
                      onPress={() => {
                        navigation.navigate('Notification');
                      }}
                    />
                    <TouchableOpacity
                      style={{paddingHorizontal: 10, marginTop: 8}}
                      onPress={() => {
                        navigation.navigate('Profile');
                      }}>
                      <Avatar.Image
                        source={{
                          uri:
                            'https://www.hallyukstar.com/wp-content/uploads/2018/02/yang-hyunsuk-2018.jpg',
                        }}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />
           
           <OwnerStack.Screen
              name="OwnerUse"
              component={OwnerUseScreen}
              options={{
                title: 'Owneruse',
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
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Icon.Button
                      name="ios-notifications"
                      size={30}
                      color={colors.text}
                      backgroundColor= '#35A3A8'
                      onPress={() => {
                        navigation.navigate('Notification');
                      }}
                    />
                    <TouchableOpacity
                      style={{paddingHorizontal: 10, marginTop: 8}}
                      onPress={() => {
                        navigation.navigate('Profile');
                      }}>
                      <Avatar.Image
                        source={{
                          uri:
                            'https://www.hallyukstar.com/wp-content/uploads/2018/02/yang-hyunsuk-2018.jpg',
                        }}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />
            <OwnerStack.Screen
              name="OwnerUseAdd"
              component={OwnerUseAdd}
              options={{
                title: 'OwnerUse',
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
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Icon.Button
                      name="ios-notifications"
                      size={30}
                      color={colors.text}
                      backgroundColor= '#35A3A8'
                      onPress={() => {
                        navigation.navigate('Notification');
                      }}
                    />
                    <TouchableOpacity
                      style={{paddingHorizontal: 10, marginTop: 8}}
                      onPress={() => {
                        navigation.navigate('Profile');
                      }}>
                      <Avatar.Image
                        source={{
                          uri:
                            'https://www.hallyukstar.com/wp-content/uploads/2018/02/yang-hyunsuk-2018.jpg',
                        }}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />

<OwnerStack.Screen
              name="OwnerAdd"
              component={OwnerAddScreen}
              options={{
                title: 'OwnerUseAdd',
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
                  <View style={{flexDirection: 'row', marginRight: 10}}>
                    <Icon.Button
                      name="ios-notifications"
                      size={30}
                      color={colors.text}
                      backgroundColor= '#35A3A8'
                      onPress={() => {
                        navigation.navigate('Notification');
                      }}
                    />
                    <TouchableOpacity
                      style={{paddingHorizontal: 10, marginTop: 8}}
                      onPress={() => {
                        navigation.navigate('Profile');
                      }}>
                      <Avatar.Image
                        source={{
                          uri:
                            'https://www.hallyukstar.com/wp-content/uploads/2018/02/yang-hyunsuk-2018.jpg',
                        }}
                        size={30}
                      />
                    </TouchableOpacity>
                  </View>
                ),
              }}
            />

          </OwnerStack.Navigator>
        );
        
      
            };