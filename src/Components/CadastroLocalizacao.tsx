import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function CadastroLocalizacao({ navigation }: any) {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

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

  function proximo() {
    if (!cep || !logradouro || !bairro || !cidade || !uf) {
      Alert.alert("Preencha todos os campos");
      return;
    }

    navigation.navigate("CadastroInterrupcao", {
      cep,
      logradouro,
      bairro,
      cidade,
      uf,
    });
  }

  return (
    <View style={styles.container}>
      <Text>CEP:</Text>
      <TextInput
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button title="Buscar CEP" onPress={buscarCep} />

      <Text>Logradouro:</Text>
      <TextInput value={logradouro} editable={false} style={styles.input} />
      <Text>Bairro:</Text>
      <TextInput value={bairro} editable={false} style={styles.input} />
      <Text>Cidade:</Text>
      <TextInput value={cidade} editable={false} style={styles.input} />
      <Text>UF:</Text>
      <TextInput value={uf} editable={false} style={styles.input} />

      <Button title="Próximo" onPress={proximo} />
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
