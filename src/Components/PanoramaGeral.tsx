import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { obterDuracao } from '../storage/tempoService'; // ajuste o caminho conforme sua estrutura

type RootStack = {
  Interrupcao: undefined;
  PanoramaGeral: undefined;
};

const PanoramaGeral = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStack>>();
  const [duracao, setDuracao] = useState<string | null>(null);

  useEffect(() => {
    const carregarDuracao = async () => {
      const tempo = await obterDuracao();
      setDuracao(tempo);
    };
    carregarDuracao();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Panorama Geral</Text>

      {duracao ? (
        <Text style={styles.info}>⏱️ Tempo de interrupção: {duracao}</Text>
      ) : (
        <Text style={styles.info}>⏱️ Nenhuma duração registrada ainda</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  info: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default PanoramaGeral;
