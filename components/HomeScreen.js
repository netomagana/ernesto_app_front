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
        title="Add New Record"
        onPress={() => navigation.navigate('Add')}
      />
      <FlatList
        data={registros}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.nombre} - {item.vehiculo} - {item.modelo} - {item.fecha}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { recordId: item.id })}>
              <Text style={styles.edit}>Edit</Text>
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
        title="Refresh"
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
    borderBottomColor: '#ccc'
  },
  edit: {
    color: 'blue'
  },
  refreshButton: {
    marginVertical: 16
  }
});

export default HomeScreen;
