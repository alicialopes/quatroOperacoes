import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image} from 'react-native';

export default function App(){
  const [numero1, setNUMERO1] = useState('');
  const [numero2, setNUMERO2] = useState('');

  function soma(){
    const resultado = parseFloat(numero1) + parseFloat(numero2);
    alert(resultado);
  }
  function subtracao(){
    const resultado = parseFloat(numero1) - parseFloat(numero2);
    alert(resultado);
  }
  function multiplicacao(){
    const resultado = parseFloat(numero1) * parseFloat(numero2);
    alert(resultado);
  }
  function divisao(){
    const resultado = parseFloat(numero1) / parseFloat(numero2);
    alert('O resultado é ' + resultado);
  }

  return(
    <View style={estilo.container}>
           <Image style={estilo.foto} source={{uri: 'https://osvaldolima.com.br/wp-content/uploads/2020/11/ferias-do-trabalhador-como-calcular-1200x423.jpg'}}/>

      <Text style={estilo.titulo}> Calculadora Digital </Text>

      <TextInput style={estilo.input} value={numero1} keyboardType='numeric' onChangeText={(numero1)=> setNUMERO1(numero1)} placeholder="Digite um número"/>
      <TextInput style={estilo.input} value={numero2} keyboardType='numeric' onChangeText={(numero2)=> setNUMERO2(numero2)} placeholder="Digite um número"/>

    <View style={estilo.vbotoes}>
      <TouchableOpacity style={estilo.botao} onPress={soma}>
        <Text style={estilo.textobotao}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.botao} onPress={subtracao}>
        <Text style={estilo.textobotao}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.botao} onPress={multiplicacao}>
        <Text style={estilo.textobotao}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity style={estilo.botao} onPress={divisao}>
        <Text style={estilo.textobotao}>/</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    backgroundColor: '#FCF0C4',
    alignItems: 'center'
  },
  input:{
    backgroundColor: '#FFFAE7',
    margin: 10,
    padding: 10,
    borderRadius: 15,
    fontSize: 20
  },
  titulo:{
    fontSize: 30,
    margin: 20,
    textAlign: 'center',
    color: '#6E2C00',
    fontWeight:'bold'
  },
  botao:{
    justifyContent: 'center',
    backgroundColor: '#6E2C00',
    margin: 10,
    padding: 10,    
    borderRadius: 10
  },
  textobotao:{
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFAE7'
  },
  foto:{
    width: 360,
    height: 170,
    borderRadius: 10
  },
  vbotoes:{
    marginTop: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
});