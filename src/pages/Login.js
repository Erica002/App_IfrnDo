import React, { useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { InputLogin } from '../components/InputLogin';
import api from '../services/api';


export function Login({navigation}) {
  const[matricula, setMatricula] = useState('');
  const[password, setPassword] = useState('');

  async function handleLogin(){
    var params = new URLSearchParams();
    params.append('username', matricula);
    params.append('password', password);
    
    try{
      const response = await api.post('autenticacao/token/', params);
      const {token} = response.data;
      console.log(token)
      const responseUser = await api.get('/minhas-informacoes/meus-dados/', {
        headers: {
          'authorization': 'jwt ' + token,
          'Accept' : 'application/json',
          'Content-Type' : 'application/json'
        } 
      });
      
      console.log(responseUser.data);
    }catch(error){
      Alert.alert("Erro na autentificação. Matrícula ou senha incorreta");
    }
     
  }

    return (
        <View style={styles.container}>
            <StatusBar animated={true} backgroundColor="#2e8b57"/>
          <View>
            <Image source={require('../img/logo.png')} style={styles.logo}/>
            <Text style={styles.titulo}>IFRN.DO</Text>
          <View style={styles.formulario}>
            <InputLogin  label = "Matrícula" onChangeText={text => setMatricula(text)}/>
            <InputLogin  label = "Senha" password = {true} onChangeText={text => setPassword(text)}/>
            
          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.textButton}>Entrar</Text>
          </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('todo')}>
            <Text style={styles.textButton}>Ifrn.Do</Text>
          </TouchableOpacity>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'relative',
    backgroundColor: '#2e8b57',
  },

  logo:{
    alignSelf: 'center',
    
  }, 
  titulo:{
    fontSize: 32, 
    fontWeight: 'bold',
    color:'#FFFFFF',
    textAlign: 'center',
    paddingTop: 30,
    paddingBottom: 30,
  }, 
  
  formulario:{
    justifyContent:'space-evenly',
    alignItems:'center',
    height:310,
    position: 'relative',
  }, 
  
  button:{
    justifyContent:'center',
    alignItems:'center',
    height:65,
    width:275, 
    borderRadius: 10,
    backgroundColor:'#666666',
  }, 

  textButton:{
    fontSize:25,
    color:'#FFFFFF', 
  }
  
});
