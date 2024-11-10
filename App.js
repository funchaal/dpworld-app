import './gesture-handler'

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Pressable } from 'react-native';
import Routes from './src/routes/index.routes';

import { NavigationContainer } from '@react-navigation/native'

function Input({...props}) {
  return (
    <View style={{ position: 'relative', width: '80%', marginVertical: 15 }}>
      <Text style={{ marginBottom: 3 }}>{props.Label}</Text>
      <TextInput 
        placeholder={props.Title} 
        style={{
          display: 'flex', 
          height: 50, 
          width: "100%", 
          backgroundColor: '#ededed', 
          borderRadius: 10, 
          paddingHorizontal: 15
        }}
      ></TextInput>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Routes/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    minHeight: 600
  },
});
