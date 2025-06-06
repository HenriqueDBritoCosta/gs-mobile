import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
  Alert,
} from 'react-native';
import {PrejuizoItem} from '../types/Type';


const Prejuízo = () => {
  const [descricao, setDescricao] = useState('');
  const [prejuizos, setPrejuizos] = useState<PrejuizoItem[]>([]);

  const adicionarPrejuizo = () => {
    if (descricao.trim() === '') {
      Alert.alert('Campo vazio', 'Por favor, escreva uma descrição.');
      return;
    }

    const novo: PrejuizoItem = {
      id: Math.random().toString(36).substring(2, 9),
      descricao,
      data: new Date().toLocaleString(),
    };

    setPrejuizos((prev) => [novo, ...prev]);
    setDescricao('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrar Prejuízo</Text>

      <TextInput
        style={styles.input}
        placeholder="Descreva o prejuízo"
        value={descricao}
        onChangeText={setDescricao}
        multiline
      />

      <Button title="Adicionar" onPress={adicionarPrejuizo} />

      <FlatList
        data={prejuizos}
        keyExtractor={(item) => item.id}
        style={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles.descricao}>• {item.descricao}</Text>
            <Text style={styles.data}>{item.data}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  lista: {
    marginTop: 20,
  },
  item: {
    marginBottom: 14,
    paddingBottom: 6,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  descricao: {
    fontSize: 16,
  },
  data: {
    fontSize: 12,
    color: '#666',
  },
});

export default Prejuízo;
