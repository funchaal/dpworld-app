import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native"
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native'

export default function CPF() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', paddingHorizontal: 30 }}>

      <Text style={{fontSize: 30, maxWidth: '80%', fontWeight: 600, display: 'flex', alignSelf: 'flex-start' }}>Vamos criar uma conta para você</Text>
      <Text style={{fontSize: 20, maxWidth: '100%', marginTop: 15, display: 'flex', alignSelf: 'flex-start'}}>Informe seu CPF para começar</Text>
        <Input Label='' Title='000.000.000-00' width='100%'/>
            </View>
        <View></View>
      <Pressable onPress={() => navigation.navigate('Phone')}
        style={{
          display: 'flex', 
          width: '80%', 
          height: 50, 
          backgroundColor: '#1e1450', 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 40
        }}
      ><Text style={{ color: 'white' }}>Continuar</Text></Pressable>
      
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 30, 
      minHeight: 600
    },
  });
  