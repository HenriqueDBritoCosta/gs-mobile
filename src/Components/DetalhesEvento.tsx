import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Evento } from "../types/Type";

export default function DetalhesEvento({ route }: any) {
  const { evento }: { evento: Evento } = route.params;

  return (
    <ScrollView contentContainerStyle={{ padding: 16 }}>
      <Text style={styles.titulo}>Detalhes do Evento</Text>

      <Item
        label="Data do Registro"
        valor={formatarData(evento.dataRegistro)}
      />
      <Item label="CEP" valor={evento.cep} />
      <Item label="Endereço" valor={`${evento.logradouro}, ${evento.bairro}`} />
      <Item label="Cidade" valor={`${evento.cidade} - ${evento.uf}`} />
      <Item label="Duração da Interrupção" valor={evento.duracao} />
      <Item label="Prejuízos" valor={evento.prejuizos.join(", ")} />
    {evento.descricao ? <Item label="Descrição" valor={evento.descricao} /> : null}


    </ScrollView>
  );
}

function Item({ label, valor }: { label: string; valor: string }) {
  return (
    <View style={styles.item}>
      <Text style={styles.label}>{label}:</Text>
      <Text>{valor}</Text>
    </View>
  );
}

function formatarData(dataIso: string) {
  const data = new Date(dataIso);
  return `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${data.getFullYear()} ${data
    .getHours()
    .toString()
    .padStart(2, "0")}:${data.getMinutes().toString().padStart(2, "0")}`;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  item: {
    marginBottom: 12,
  },
  label: {
    fontWeight: "bold",
  },
});
