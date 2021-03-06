import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import { useTheme } from '@react-navigation/native';

const NotificationScreen = ({navigation}) => {

  const theme = useTheme();
  return (
    <View style={styles.container}>
      <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
    <Button
      title="Go to details screen"
      onPress={() => navigation.navigate("Details")}
    />
    </View>
  );
};

export default NotificationScreen;
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
  },
});
