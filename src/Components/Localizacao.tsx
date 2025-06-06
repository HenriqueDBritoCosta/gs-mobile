import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { cepApi } from '../api/index';
import CEP from '../types/index';

const Local = () => {
  const [cepUsuario, setCepUsuario] = useState('');
  const [resultado, setResultado] = useState<CEP | null>(null);

  const buscarCep = async () => {
    if (cepUsuario.trim() === '') {
      Alert.alert('Campo vazio', 'Por favor, digite um CEP.');
      return;
    }

    try {
      const { data } = await cepApi.get<CEP>(`${cepUsuario}/json`);
      setResultado(data);
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível buscar o CEP.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Digite o CEP da zona afetada</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu CEP (ex: 01001000)"
        value={cepUsuario}
        onChangeText={setCepUsuario}
        keyboardType="numeric"
      />

      <Button title="Buscar" onPress={buscarCep} />

      {resultado && (
        <View style={styles.resultado}>
          <Text>CEP: {resultado.cep}</Text>
          <Text>Logradouro: {resultado.logradouro}</Text>
          <Text>Bairro: {resultado.bairro}</Text>
          <Text>Cidade: {resultado.localidade} - {resultado.uf}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
    marginBottom: 12,
  },
  resultado: {
    marginTop: 20,
  },
});

export default Local;
