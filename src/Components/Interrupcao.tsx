import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import { salvarDuracao } from '../storage/tempoService'; // ajuste o caminho se necessário

const Interrupcao = () => {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [diferenca, setDiferenca] = useState<string | null>(null);

  const calcularDiferenca = async () => {
    if (!inicio || !fim) {
      Alert.alert('Campos obrigatórios', 'Informe os dois horários.');
      return;
    }

    try {
      const [h1, m1] = inicio.split(':').map(Number);
      const [h2, m2] = fim.split(':').map(Number);

      const totalInicio = h1 * 60 + m1;
      const totalFim = h2 * 60 + m2;

      if (isNaN(totalInicio) || isNaN(totalFim)) throw new Error();

      const minutos = totalFim - totalInicio;
      if (minutos < 0) {
        Alert.alert('Erro', 'O horário final deve ser depois do início.');
        return;
      }

      const horas = Math.floor(minutos / 60);
      const minutosRestantes = minutos % 60;

      const resultado = `${horas}h ${minutosRestantes}min`;
      setDiferenca(resultado);

      await salvarDuracao(resultado); // salva no AsyncStorage
      Alert.alert('Sucesso', 'Duração registrada com sucesso!');
    } catch (error) {
      Alert.alert('Formato inválido', 'Use o formato HH:MM');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>⏱️ Tempo de Interrupção</Text>

      <Text>Início (HH:MM):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 14:30"
        value={inicio}
        onChangeText={setInicio}
        keyboardType="numeric"
      />

      <Text>Fim (HH:MM):</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: 18:00"
        value={fim}
        onChangeText={setFim}
        keyboardType="numeric"
      />

      <Button title="Calcular Duração" onPress={calcularDiferenca} />

      {diferenca && (
        <Text style={styles.resultado}>
          Duração da queda: {diferenca}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#999',
    borderRadius: 6,
    padding: 10,
    marginBottom: 12,
  },
  resultado: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Interrupcao;
