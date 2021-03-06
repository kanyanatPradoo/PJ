// Example: Example of SQLite Database in React Native
// https://aboutreact.com/example-of-sqlite-database-in-react-native
// Screen to view all the user*/

import React from 'react';
import { StyleSheet,View,Text,FlatList } from 'react-native';

export default class ViewAll extends React.Component {

  state={
    data:[]
  }

  fetchData= async()=>{
    const response = await fetch('http://192.168.88.57:3000/project'); //http://localhost:1348/testTabl //http://172.16.186.173:1348/testTabl
    const testTable = await response.json();
    this.setState({data: testTable});
  }
  componentWillMount(){
    this.fetchData();
}

  render() {
    return (
      <View style={styles.container}>
            
      <FlatList
        data={this.state.data}
        keyExtractor= {(item,index) => index.toString()}
        renderItem={({item})=>

        <View style={{backgroundColor:'#EEB4B4',padding:10,margin:10,borderRadius:10}}>
          <Text style={{color:'#000', fontWeight:'bold'}}>
            <Text style={{color:'#000000'}}> {item.ID}</Text>{'\t'} {item.Name}</Text>
          
          <Text style={{color:'#000'}}>โทร: {item.Telephone}</Text>
          <Text style={{color:'#000'}}>เพศ: {item.Sex}</Text>
        </View>

        } 
      />
  </View>

    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

});