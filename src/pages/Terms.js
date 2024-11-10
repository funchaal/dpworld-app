import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native"
import Input from "../components/Input";
import { useNavigation } from '@react-navigation/native'

export default function Terms() {

    const navigation = useNavigation()

    function Validate() {
        navigation.navigate("terms")
    }

    return (
        <View style={styles.container}>
            <View style={{}}>
      <Text style={{fontSize: 16, fontWeight: 800, marginTop: 20, display: 'flex', alignSelf: 'flex-start', padding: 20, textTransform: 'uppercase'}}>Termo de uso do aplicativo {'\n'}DP World</Text>
      <Text style={{fontSize: 15, marginBottom: 50, display: 'flex', padding: 20, paddingTop: 0}}>
1. Aceitação dos Termos
{'\n'}
Ao baixar, instalar e utilizar o aplicativo DP World (“Aplicativo”), você concorda em cumprir e aceitar todos os termos e condições estabelecidos neste Termo de Uso. Caso não concorde com qualquer parte dos termos, recomendamos que não utilize o Aplicativo.
{'\n\n'}
2. Licença de Uso
{'\n'}
A DP World concede ao usuário uma licença limitada, não exclusiva e revogável para utilizar o Aplicativo exclusivamente para fins pessoais e não comerciais. Esta licença é intransferível e não permite sublicenciamento.
{'\n\n'}
3. Cadastro e Conta do Usuário
{'\n'}
Para acessar determinadas funcionalidades do Aplicativo, o usuário poderá precisar criar uma conta. É de responsabilidade do usuário manter a confidencialidade de suas informações de login e senha. O usuário é totalmente responsável por todas as atividades que ocorram sob sua conta.
{'\n\n'}
4. Privacidade e Segurança
{'\n'}
A DP World se compromete a proteger a privacidade dos usuários. As informações coletadas serão utilizadas exclusivamente para melhorar a experiência do usuário no Aplicativo e conforme detalhado na nossa Política de Privacidade.
      </Text>
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
      ><Text style={{ color: 'white' }}>Concordar e acessar</Text></Pressable>
      
      
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
      paddingVertical: 50, 
      minHeight: 600
    },
  });
  