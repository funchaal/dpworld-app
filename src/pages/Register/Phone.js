import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native"
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native'

export default function Phone() {

    const navigation = useNavigation()

    function Validate() {
        navigation.navigate("terms")
    }

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', paddingHorizontal: 30 }}>

      <Text style={{fontSize: 30, maxWidth: '100%', fontWeight: 600, display: 'flex', alignSelf: 'flex-start' }}>Beleza, <Text style={{  }}>Rafael</Text>{'\n'}Quase tudo pronto</Text>
      <Text style={{fontSize: 20, maxWidth: '100%', marginTop: 15, display: 'flex', alignSelf: 'flex-start'}}>Agora informe seu número de celular</Text>
        <Input Label='' Title='00 00000-0000' width='100%'/>
            </View>
        <View></View>
      <Pressable onPress={() => navigation.navigate('Confirm')}
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
  