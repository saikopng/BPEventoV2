import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = () => {
  const [rut, setRut] = useState('');
  const [nombres, setNombres] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');
  const [celular, setCelular] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [direccion, setDireccion] = useState(''); // Agregar campo para la dirección
  const [tipoUsuario, setTipoUsuario] = useState(''); // Agregar campo para el tipo de usuario

  const handleRegister = () => {
    axios
      .post('http://192.168.100.3:3000/register', {
        rut,
        nombres,
        apellidos,
        edad,
        genero,
        celular,
        correo,
        contrasena,
        direccion,
        tipoUsuario,
      })
      .then((response) => {
        if (response.status === 200) {
          console.log('Registro exitoso');
          Alert.alert('Registro exitoso', 'Tu cuenta ha sido registrada con éxito.');
        } else if (response.status === 400) {
          console.error('El correo ya está registrado');
          Alert.alert('Error de registro', 'El correo ingresado ya está registrado.');
        } else {
          console.error('Error al registrar');
          Alert.alert('Error de registro', 'Hubo un error al intentar registrarte. Por favor, inténtalo más tarde.');
        }
      })
      .catch((error) => {
        console.error('Error al hacer la solicitud: ' + error);
        Alert.alert('Error de red', 'Hubo un problema al conectar con el servidor. Por favor, verifica tu conexión a internet.');
      });
  };

  return (
    <View>
      <Text>Registro</Text>
      <TextInput placeholder="RUT" value={rut} onChangeText={setRut} />
      <TextInput placeholder="Nombres" value={nombres} onChangeText={setNombres} />
      <TextInput placeholder="Apellidos" value={apellidos} onChangeText={setApellidos} />
      <TextInput placeholder="Edad" value={edad} onChangeText={setEdad} />
      <TextInput placeholder="Género" value={genero} onChangeText={setGenero} />
      <TextInput placeholder="Celular" value={celular} onChangeText={setCelular} />
      <TextInput placeholder="Correo electrónico" value={correo} onChangeText={setCorreo} />
      <TextInput placeholder="Contraseña" value={contrasena} onChangeText={setContrasena} secureTextEntry />
      <TextInput placeholder="Dirección" value={direccion} onChangeText={setDireccion} />
      <TextInput placeholder="Tipo de Usuario" value={tipoUsuario} onChangeText={setTipoUsuario} />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;