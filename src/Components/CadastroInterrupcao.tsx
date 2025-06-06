import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function CadastroInterrupcao({ navigation, route }: any) {
  const [duracao, setDuracao] = useState("");

  const localizacao = route.params;

  function proximo() {
    if (!duracao) {
      Alert.alert("Informe a duração");
      return;
    }

    navigation.navigate("CadastroPrejuizos", {
      ...localizacao,
      duracao,
    });
  }

  return (
    <View style={styles.container}>
      <Text>Duração da Interrupção (ex: 2h30):</Text>
      <TextInput
        value={duracao}
        onChangeText={setDuracao}
        style={styles.input}
      />
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
