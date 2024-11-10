import React from "react";
import { StyleSheet, View, Text, Pressable, Image } from "react-native"
import Input from "../components/Input";
import { useNavigation } from '@react-navigation/native'
import { FlatList } from "react-native-gesture-handler";

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

    const navigation = useNavigation()

    return (
        <View style={[styles.ListItem]}>
            <Text style={{ marginBottom: 5, fontWeight: 800, color: '000000' }}>{props.el.Start_Time}</Text>
            <Text>Agendamento Nº {props.el.Appt}</Text>
            <Text>Placa: {props.el.Plate}</Text>
            <Text>Transportadora: {props.el.Status}</Text>
            <Text>Status: {props.el.Status}</Text>
            <Pressable onPress={() => navigation.navigate('Ticket')} style={{ backgroundColor: '#413b5e', padding: 8, borderRadius: 30, marginTop: 15, display: props.index == 0 ? 'block' : 'none' }}>
                <Text style={{ color: '#ffff', fontWeight: 800, fontSize: 15, textAlign: 'center' }}>Visualizar Ticket</Text>
            </Pressable>
            {/* <View style={{ position: 'relative', marginHorizontal: 5, marginTop: 15, height: 1, borderTopWidth: 1, borderTopColor: '#cfcfcf', borderStyle: 'dashed' }}></View> */}
        </View>
    )
}

export default function Home() {

    const navigation = useNavigation()

    return (
    <View style={styles.container}>
        <Image source={require('../images/Logo New.png')} style={{ width: 150, height: 33.75, marginRight: 20, marginTop: 70, alignSelf: 'flex-start', marginHorizontal: 15 }}></Image>
            <View style={{ width: '100%', backgroundColor: 'white', flexGrow: 1, borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 12 }}>
                <View
                    style={{
                        width: '100%', 
                        height: 'max-content', 
                        // backgroundColor: '#1e1450', 
                        // backgroundColor: '#413b5e', 
                        // backgroundColor: '#1d3485', 
                        borderRadius: 30, 
                        padding: 10, 
                        marginTop: 15
                    }}
                >
                    <Text style={{ fontSize: 30, fontWeight: 800, opacity: 1, color: 'black' }}><Text style={{ fontWeight: 'normal' }}>Olá,</Text> {'\n'}
                        Rafael Funchal
                    </Text>
                    <Text>
                        Sua pontuação: 9500pts.
                    </Text>
                    <Text style={{ marginTop: 15, color: 'black', fontSize: 15, borderRadius: 15 }}>
                        As operações seguem normalmente. {'\n'}Quaisquer mudanças será avisado aqui.
                    </Text>

                </View>
                <View
                    style={{
                        width: '100%', 
                        // maxHeight: '60%', 
                        // backgroundColor: '#f2f4ff', 
                        // backgroundColor: '#f2f4ff', 
                        borderRadius: 30, 
                        padding: 5, 
                        marginTop: 30
                    }}
                >
                    <Text style={{ fontSize: 15, opacity: 0.7 }}>
                        Próximos agendamentos
                    </Text>
                    <FlatList
                    style={{ marginTop: 15 }}
                        data={JSONTeste}
                        renderItem={({ item, index }) => <ListItem el={item} index={index} />}
                        keyExtractor={(item, index) => index.toString()} // para evitar warnings sobre chave única
                    />
                </View>
            </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 600
    }, 
    ListItem: {
        // backgroundColor: '#f7f7f7', 
        // backgroundColor: 'white', 
        backgroundColor: '#f2f4ff', 
        padding: 20, 
        borderRadius: 30, 
        marginBottom: 10, 
        borderWidth: 1, 
        borderColor: '#f2f4ff', 
        opacity: 1
    }
  });
  