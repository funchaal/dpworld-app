import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Text, Pressable, TextInput } from "react-native"
import Input from "../../components/Input";
import { useNavigation } from '@react-navigation/native'

function CodeInput() {

    const navigation = useNavigation()

    const [borderColor1, setBorderColor1] = useState('lightgray')
    const [borderColor2, setBorderColor2] = useState('lightgray')
    const [borderColor3, setBorderColor3] = useState('lightgray')
    const [borderColor4, setBorderColor4] = useState('lightgray')

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);

    // Função para alterar a cor da borda e mover o foco
    const handleChange = (text, setBorderColor, nextInputRef) => {
        setBorderColor(text ? '#1e1450' : 'lightgray');
        // Mover o foco para o próximo campo se houver texto
        if (text && nextInputRef) {
        nextInputRef.current.focus();
        }
    };

  return (
    <View style={styles.CodeInput}>
      <TextInput
        ref={inputRef1}
        onChangeText={(text) => handleChange(text, setBorderColor1, inputRef2)}
        style={[styles.CodeInputField, { borderBottomColor: borderColor1 }]}
        maxLength={1}  // Limitar a um caractere
      />
      <TextInput
        ref={inputRef2}
        onChangeText={(text) => handleChange(text, setBorderColor2, inputRef3)}
        style={[styles.CodeInputField, { borderBottomColor: borderColor2 }]}
        maxLength={1}
      />
      <TextInput
        ref={inputRef3}
        onChangeText={(text) => handleChange(text, setBorderColor3, inputRef4)}
        style={[styles.CodeInputField, { borderBottomColor: borderColor3 }]}
        maxLength={1}
      />
      <TextInput
        ref={inputRef4}
        onChangeText={(text) => { handleChange(text, setBorderColor4, null); navigation.navigate('Password')}}  // Último campo, sem próximo
        style={[styles.CodeInputField, { borderBottomColor: borderColor4 }]}
        maxLength={1}
      />
    </View>
  );
}

const ResendCodeButton = () => {
    const [timeLeft, setTimeLeft] = useState(0); // Tempo restante em segundos
    const [isDisabled, setIsDisabled] = useState(false); // Para habilitar/desabilitar o botão
  
    // Função para iniciar o contador de 30 segundos
    const handlePress = () => {
      if (!isDisabled) {
        // Começa a contagem regressiva quando o botão é pressionado
        setIsDisabled(true);
        setTimeLeft(30); // Começa com 30 segundos
  
        // Atualiza o contador a cada segundo
        const interval = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(interval);
              setIsDisabled(false); // Reabilita o botão quando o tempo acabar
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000); // De 1 em 1 segundo
      }
    };
  
    return (
      <View style={{  }}>
        <Pressable
          onPress={handlePress}
          disabled={isDisabled} // Desabilita o botão enquanto o contador está em execução
          style={{ padding: 5, borderRadius: 5, marginTop: 50 }}
        >
          <Text style={{ textAlign: 'center', fontSize: 16, color: isDisabled ? 'gray' : '#6183ff' }}>
            {isDisabled
              ? `Reenviar código em: ${timeLeft}s`
              : 'Reenviar código'}
          </Text>
        </Pressable>
      </View>
    );
  };
  

export default function Confirm() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', paddingHorizontal: 30 }}>

      <Text style={{fontSize: 30, maxWidth: '80%', fontWeight: 600, display: 'flex', alignSelf: 'flex-start' }}>Agora precisamos validar seu celular</Text>
      <Text style={{fontSize: 20, maxWidth: '100%', marginTop: 15, display: 'flex', alignSelf: 'flex-start'}}>Enviamos um código de 4 números ao seu SMS</Text>
            </View>
            <View style={{ display: 'flex', alignItems: 'center' }}>
                <CodeInput/>
                <ResendCodeButton/>
            </View>
        <View></View>
      
      
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
    CodeInput: {
        width: '70%', 
        height: 'fit-content', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    }, 
    CodeInputField: {
        borderBottomWidth: 2, 
        width: 50, 
        height: 50, 
        fontSize: 30, 
        textAlign: 'center', 
        color: '#1e1450'
    }
  });
  