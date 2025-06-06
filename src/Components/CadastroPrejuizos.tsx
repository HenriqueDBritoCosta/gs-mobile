import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { salvarEvento } from "../storage/eventoService";
import { v4 as uuidv4 } from "uuid";

export default function CadastroPrejuizos({ navigation, route }: any) {
  const [prejuizosTexto, setPrejuizosTexto] = useState("");
  const [descricao, setDescricao] = useState('');

  const dadosParciais = route.params;

  async function registrarEvento() {
    if (!prejuizosTexto) {
      Alert.alert("Informe os prejuízos");
      return;
    }

    const evento = {
      id: uuidv4(),
      ...dadosParciais,
      prejuizos: prejuizosTexto.split(",").map((p) => p.trim()),
      dataRegistro: new Date().toISOString(),
      descricao: descricao.trim() || undefined,
    };

    await salvarEvento(evento);
    Alert.alert("Evento registrado com sucesso!");
    navigation.navigate("PanoramaGeral");
  }

  return (
    <View style={styles.container}>
      <Text>Prejuízos (separados por vírgula):</Text>
      <TextInput
        value={prejuizosTexto}
        onChangeText={setPrejuizosTexto}
        placeholder="Ex: alimentos, internet, segurança"
        style={styles.input}
      />
      <Text>Descrição (opcional):</Text>
      <TextInput
        style={[styles.input, { height: 80 }]}
        value={descricao}
        onChangeText={setDescricao}
        placeholder="Detalhes adicionais sobre o evento"
        multiline
      />
      <Button title="Registrar Evento" onPress={registrarEvento} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 12,
    padding: 8,
    borderRadius: 4,
  },
});