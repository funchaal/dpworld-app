import React from "react";

import { View, TextInput, Text } from "react-native";

export default function Input({...props}) {
    return (
      <View style={{ position: 'relative', width: props.width || '80%', marginVertical: 15 }}>
        <Text style={{ marginBottom: 3 }}>{props.Label}</Text>
        <TextInput 
          placeholder={props.Title} 
          style={{
            display: 'flex', 
            height: 50, 
            width: '100%', 
            backgroundColor: '#ededed', 
            borderRadius: 10, 
            paddingHorizontal: 15
          }}
        ></TextInput>
      </View>
    )
  }