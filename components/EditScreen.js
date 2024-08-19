import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_URL } from '../constants/api';

const EditScreen = ({ route, navigation }) => {
  const { recordId } = route.params;
  const [registro, setRegistro] = useState({ nombre: '', vehiculo: '', modelo: '', fecha: '' });

  useEffect(() => {
    axios.get(`${API_URL}/register_clients/${recordId}`) // Actualiza aquí el endpoint
      .then(response => setRegistro(response.data))
      .catch(error => console.error(error));
  }, [recordId]);

  const handleUpdate = () => {
    axios.put(`${API_URL}/register_clients/${recordId}`, registro) // Actualiza aquí el endpoint
      .then(() => navigation.goBack())
      .catch(error => console.error(error));
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={registro.nombre}
        onChangeText={(text) => setRegistro({ ...registro, nombre: text })}
        placeholder="Nombre"
        style={styles.input}
      />
      <TextInput
        value={registro.vehiculo}
        onChangeText={(text) => setRegistro({ ...registro, vehiculo: text })}
        placeholder="Vehículo"
        style={styles.input}
      />
      <TextInput
        value={registro.modelo}
        onChangeText={(text) => setRegistro({ ...registro, modelo: text })}
        placeholder="Modelo"
        style={styles.input}
      />
      <TextInput
        value={registro.fecha}
        onChangeText={(text) => setRegistro({ ...registro, fecha: text })}
        placeholder="Fecha"
        style={styles.input}
      />
      <Button title="Update Record" onPress={handleUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 16,
    padding: 8
  }
});

export default EditScreen;
