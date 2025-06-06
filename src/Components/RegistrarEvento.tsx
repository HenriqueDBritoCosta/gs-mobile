import React, { useState } from "react";
import { TextInput, Text, Button, Alert, ScrollView } from "react-native";
import { salvarEvento } from "../storage/eventoService";
import { Evento } from "../types/Type";
import { v4 as uuidv4 } from "uuid";

export default function RegistrarEvento({ navigation }: any) {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [duracao, setDuracao] = useState("");
  const [prejuizos, setPrejuizos] = useState("");

  async function buscarCep() {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (data.erro) {
        Alert.alert("CEP não encontrado");
        return;
      }

      setLogradouro(data.logradouro || "");
      setBairro(data.bairro || "");
      setCidade(data.localidade || "");
      setUf(data.uf || "");
    } catch (err) {
      Alert.alert("Erro ao buscar CEP");
    }
  }

  async function registrar() {
    if (!cep || !duracao || !prejuizos) {
      Alert.alert("Preencha todos os campos obrigatórios");
      return;
    }

    const evento: Evento = {
      id: uuidv4(),
      cep,
      logradouro,
      bairro,
      cidade,
      uf,
      duracao,
      prejuizos: prejuizos.split(",").map((p) => p.trim()),
      dataRegistro: new Date().toISOString(),
    };

    await salvarEvento(evento);
    Alert.alert("Evento registrado com sucesso!");
    navigation.navigate("PanoramaGeral");
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text>CEP:</Text>
      <TextInput
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        style={estiloInput}
      />
      <Button title="Buscar CEP" onPress={buscarCep} />

      <Text>Logradouro:</Text>
      <TextInput value={logradouro} editable={false} style={estiloInput} />
      <Text>Bairro:</Text>
      <TextInput value={bairro} editable={false} style={estiloInput} />
      <Text>Cidade:</Text>
      <TextInput value={cidade} editable={false} style={estiloInput} />
      <Text>UF:</Text>
      <TextInput value={uf} editable={false} style={estiloInput} />

      <Text>Duração da Interrupção (ex: 2h30):</Text>
      <TextInput
        value={duracao}
        onChangeText={setDuracao}
        style={estiloInput}
      />

      <Text>Prejuízos (separados por vírgula):</Text>
      <TextInput
        value={prejuizos}
        onChangeText={setPrejuizos}
        placeholder="Ex: alimentos, internet, segurança"
        style={estiloInput}
      />

      <Button title="Registrar Evento" onPress={registrar} />
    </ScrollView>
  );
}

const estiloInput = {
  borderWidth: 1,
  borderColor: "#ccc",
  marginBottom: 12,
  padding: 8,
  borderRadius: 4,
};
