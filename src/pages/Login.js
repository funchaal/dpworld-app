import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native"
import Input from "../components/Input";
import { useNavigation, NavigationProp } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation()

    function Validate() {
        navigation.navigate('Terms')
    }

    return (
        <View style={styles.container}>
      {/* <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 50}}>Vamos entrar na sua conta!</Text> */}
      <Image source={require('../images/Logo New.png')} style={{ width: 190, height: 42.65, marginRight: 20, marginTop: '20%' }}></Image>
      <View style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Input Title='Insira seu número de CPF' Label='CPF'></Input>
      <Input Title='Insira sua senha' Label='Senha'></Input>
      <Pressable onPress={() => Validate()}
        style={{
          display: 'flex', 
          width: '80%', 
          height: 50, 
          backgroundColor: '#1e1450', 
          marginTop: 30, 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 40
        }}
      ><Text style={{ color: 'white' }}>Acessar</Text></Pressable>
      <Pressable 
        style={{
          display: 'flex', 
          width: '80%', 
          height: 50, 
          backgroundColor: 'white', 
          borderWidth: 1, 
          borderColor: '#1e1450', 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 40, 
          marginTop: 10
        }}
      ><Text style={{ color: '#1e1450' }}>Não sei minha senha</Text></Pressable>
      </View>
      <Pressable onPress={() => navigation.navigate('CPF')}><Text style={{ fontSize: 15 }}>Não tem uma conta? <Text style={{ color: '#1e1450', fontWeight: 'bold' }}>Cadastra-se!</Text></Text></Pressable>
    </View>
    )
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
  