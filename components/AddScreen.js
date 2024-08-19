import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';
import { API_URL } from '../constants/api';

const AddScreen = ({ navigation }) => {
  const [registro, setRegistro] = useState({ nombre: '', vehiculo: '', modelo: '', fecha: '' });

  const handleAdd = () => {
    axios.post(`${API_URL}/register_clients`, registro) // Actualiza aquí el endpoint
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
      <Button title="Add Record" onPress={handleAdd} />
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

export default AddScreen;
