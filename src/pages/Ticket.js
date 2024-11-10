import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native"
import Input from "../components/Input";
import { useNavigation } from '@react-navigation/native'

function Divisor() {
    return (
        <View style={{ position: 'relative', marginHorizontal: 5, marginVertical: 15, height: 1, borderTopWidth: 1, borderTopColor: '#cfcfcf', borderStyle: 'dashed' }}></View>
    )
}

export default function Ticket() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{ flex: 1, width: '100%', display: 'flex' }}>
      <View>
      <Text style={{fontSize: 20, fontWeight: 800, display: 'flex', textAlign: 'center' }}>DP World Santos</Text>
      <Text style={{fontSize: 16, display: 'flex', textAlign: 'center' }}>Guia de movimentação de container</Text>
      <Text style={{fontSize: 16, display: 'flex', textAlign: 'center', marginTop: 5 }}>Recebimento Exportação</Text>
      </View>
      
        <Divisor/>
      <Text style={{ }}>Container: SEGU6547680</Text>
      <Text style={{ }}>Tamanho/ISO: 45G1/45G1</Text>
      <Text style={{ }}>PB Container: 28710.0</Text>
      <Divisor/>
      <Text style={{ }}>Placa do Veículo: DTC2069</Text>
      <Text style={{ }}>Peso Balança: 35246.0</Text>
      <Divisor/>
      <Text style={{ }}>Motorista: Adalberto Pereira da Silva</Text>
      <Text style={{ }}>CPF: 254.893.675-54</Text>
      <Divisor/>
      <Text style={{ }}>Localização: Bloco 1E / Quadra 14</Text>
      <Divisor/>
      <Text style={{ }}>Para destravar o container dirija-se à área identificada</Text>
      <Divisor/>
      <Text style={{ }}>Passagem obrigatória pelo Scanner 2</Text>
      <Divisor/>
      <Text style={{ }}>Veículos do tipo Bitrem/Rodotrem - Utilizar apenas o Scanner próximo aos gates</Text>
      </View>
      <Pressable onPress={() => navigation.navigate('Home')}
        style={{
          display: 'flex', 
          width: '80%', 
          height: 50, 
          backgroundColor: '#1e1450', 
          justifyContent: 'center', 
          alignItems: 'center', 
          borderRadius: 40
        }}
      ><Text style={{ color: 'white' }}>Download Ticket</Text></Pressable>
      
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingBottom: 50, 
      padding: 20, 
      minHeight: 600
    },
  });
  