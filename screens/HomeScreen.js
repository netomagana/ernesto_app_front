import React from 'react';
import { View, Text, Button, FlatList, TouchableOpacity, StyleSheet, RefreshControl } from 'react-native';
import useFetch from '../hooks/useFetch';

const HomeScreen = ({ navigation }) => {
  const { data: registros, loading, error, refetch } = useFetch('register_clients');

  const handleRefresh = () => {
    refetch(); // Llama a la función para refrescar los datos
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <Button
        title="Agregar cliente nuevo"
        onPress={() => navigation.navigate('Agregar cliente nuevo')}
      />
      <FlatList
        data={registros}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre} - {item.vehiculo} - {item.modelo} - {item.fecha}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Editar cliente existente', { recordId: item.id })}>
              <Text style={styles.edit}>Editar</Text>
            </TouchableOpacity>
          </View>
        )}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleRefresh}
          />
        }
      />
      <Button
        title="Refrescar"
        onPress={handleRefresh}
        style={styles.refreshButton}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  },
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#CCC'
  },
  edit: {
    color: 'orange'
  },
  refreshButton: {
    marginVertical: 16
  }
});

export default HomeScreen;
