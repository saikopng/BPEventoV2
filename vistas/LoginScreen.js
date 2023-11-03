import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, SafeAreaView, StyleSheet } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation, setUserLoggedIn }) => {
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://192.168.100.3:3000/login', {
        correo, // Utiliza "correo" en lugar de "email"
        contrasena, // Utiliza "contrasena" en lugar de "password"
      });

      if (response.status === 200) {

        console.log('Inicio de sesión exitoso');
        setUserLoggedIn(true);
        const token = response.data.token;
        AsyncStorage.setItem('token', token);

      } else if (response.status === 401) {
        
        console.log('Credenciales incorrectas');
        Alert.alert('Credenciales incorrectas', 'Por favor, verifica tus credenciales e inténtalo de nuevo.');

      } else {

        console.error('Error de inicio de sesión');
        Alert.alert('Error de inicio de sesión', 'Hubo un error al intentar iniciar sesión. Por favor, inténtalo más tarde.');

      }
    } catch (error) {

      console.error('Error al hacer la solicitud: ' + error);
      Alert.alert('Error de red', 'Hubo un problema al conectar con el servidor. Por favor, verifica tu conexión a internet.');

    }
  };

  // Agregar un botón para ir a la pantalla de registro
  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={correo}
        onChangeText={setCorreo}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={contrasena}
        onChangeText={setContrasena}
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button title="Iniciar sesión" onPress={handleLogin} />
        <View style={styles.buttonSpacing} />
        <Button title="Registrarse" onPress={handleNavigateToRegister} />
      </View>
    </View>
  </SafeAreaView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
},
content: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 20,
},
title: {
  marginBottom: 15, // Espacio inferior para separar el texto de los TextInput
},
input: {
  width: '100%',
  marginBottom: 10,
  padding: 10,
  borderWidth: 1,
  borderColor: '#ccc',
  borderRadius: 5,
},
buttonContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 15,
},
buttonSpacing: {
  width: 10,
},
});

export default LoginScreen;