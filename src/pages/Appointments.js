import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, FlatList } from "react-native";
import { useNavigation } from '@react-navigation/native';

// Dados de exemplo
const JSONTeste = [
    {
      "Appt": 7596165,
      "Plate": "NZR7854",
      "TruckingCo": "Cooperativa dos Transportes",
      "Status": "Expirado",
      "Start_Time": "21/10/2024 14:00"
    },
    {
      "Appt": 7596166,
      "Plate": "ABC1234",
      "TruckingCo": "Transporte Rápido",
      "Status": "Agendado",
      "Start_Time": "22/10/2024 09:00"
    },
    {
      "Appt": 7596167,
      "Plate": "DEF5678",
      "TruckingCo": "Logística Eficiente",
      "Status": "Em Andamento",
      "Start_Time": "23/10/2024 10:30"
    },
    {
      "Appt": 7596168,
      "Plate": "GHI9101",
      "TruckingCo": "Transporte Global",
      "Status": "Expirado",
      "Start_Time": "24/10/2024 16:00"
    },
    {
      "Appt": 7596169,
      "Plate": "JKL1122",
      "TruckingCo": "Cooperativa dos Transportes",
      "Status": "Criado",
      "Start_Time": "25/10/2024 11:00"
    },
    {
      "Appt": 7596170,
      "Plate": "MNO3344",
      "TruckingCo": "Transporte Express",
      "Status": "Criado",
      "Start_Time": "26/10/2024 08:30"
    },
    {
      "Appt": 7596171,
      "Plate": "PQR5566",
      "TruckingCo": "Logística Nacional",
      "Status": "Em Andamento",
      "Start_Time": "27/10/2024 13:45"
    },
    {
      "Appt": 7596172,
      "Plate": "STU7788",
      "TruckingCo": "Transporte Rápido",
      "Status": "Expirado",
      "Start_Time": "28/10/2024 12:00"
    },
    {
      "Appt": 7596173,
      "Plate": "VWX9900",
      "TruckingCo": "Transporte Global",
      "Status": "Cancelado",
      "Start_Time": "29/10/2024 17:30"
    },
    {
      "Appt": 7596174,
      "Plate": "YZA2233",
      "TruckingCo": "Logística Eficiente",
      "Status": "Em Andamento",
      "Start_Time": "30/10/2024 14:15"
    }
  ];

  
function ListItem({...props}) {
    return (
        <View style={[styles.ListItem, { opacity: props.el.Status == 'Criado' ? 1 : 0.55 }]}>
            <Text style={{ marginBottom: 5, fontWeight: 'bold', color: props.el.Status == 'Criado' ? '#9778ff' : '000000' }}>{props.el.Start_Time}</Text>
            <Text>Agendamento {props.el.Appt}</Text>
            <Text>Placa: {props.el.Plate}</Text>
            <Text>Transportadora: {props.el.Status}</Text>
            <Text>Status: {props.el.Status}</Text>
            <View style={{ position: 'relative', marginHorizontal: 15, marginTop: 15, height: 1, backgroundColor: props.el.Status == 'Criado' ? '#9778ff' : '#e0e0e0' }}></View>
        </View>
    )
}

export default function Appointments() {
  const navigation = useNavigation();

  const ativos = JSONTeste.filter(item => item.Status === "Criado");
  const inativos = JSONTeste.filter(item => item.Status !== "Criado");

  // Junta as listas de ativos e inativos com os títulos
  const data = [
    { title: 'Ativos', data: ativos },
    { title: 'Inativos', data: inativos }
  ];

  // Inicializando o estado com o JSONTeste
  const [appointments, setAppointments] = useState(JSONTeste);

  return (
    <View style={styles.container}>
        {/* <FlatList
            data={JSONTeste}
            renderItem={(({item}) => <ListItem el={item}/>)}
            style={{ width: '100%', height: '100%' }}
        /> */}
        <FlatList
        data={data}
        style={{ width: '100%', paddingTop: 10 }}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 10 }}>
            <Text style={styles.sectionTitle}>{item.title}</Text>
            <FlatList
              data={item.data}
              renderItem={({ item }) => <ListItem el={item} />}
              keyExtractor={(item) => item.Appt.toString()}
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 600, 
    height: '100%', 
    overflow: 'scroll'
  }, 
  ListItem: {
    position: 'relative', 
    width: '100%',  
    paddingTop: 15, 
    paddingHorizontal: 15
  }, 
  sectionTitle: {
    marginHorizontal: 15, 
    marginTop: 15, 
    fontWeight: 'bold'
  }
});
