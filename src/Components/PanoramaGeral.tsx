import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Evento } from "../types/Type";
import { listarEventos } from "../storage/eventoService";
import { useIsFocused } from "@react-navigation/native";

export default function PanoramaGeral({ navigation }: any) {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    async function carregar() {
      const dados = await listarEventos();
      setEventos(dados.reverse());
    }
    carregar();
  }, [isFocused]);

  const renderItem = ({ item }: { item: Evento }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("DetalhesEvento", { evento: item })}
    >
      <Text style={styles.titulo}>{formatarData(item.dataRegistro)}</Text>
      <Text>
        {item.cidade} - {item.uf}
      </Text>
      <Text>Duração: {item.duracao}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <FlatList
        data={eventos}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={<Text>Nenhum evento registrado.</Text>}
      />
    </View>
  );
}

function formatarData(dataIso: string) {
  const data = new Date(dataIso);
  return `${data.getDate().toString().padStart(2, "0")}/${(data.getMonth() + 1)
    .toString()
    .padStart(2, "0")}/${data.getFullYear()} - ${data
    .getHours()
    .toString()
    .padStart(2, "0")}:${data.getMinutes().toString().padStart(2, "0")}`;
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#eee",
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
