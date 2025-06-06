import AsyncStorage from "@react-native-async-storage/async-storage";
import { Evento } from "../types/Type";

const CHAVE_EVENTOS = "eventos";

export const salvarEvento = async (evento: any) => {
  try {
    const eventosExistentes = await AsyncStorage.getItem("eventos");
    const eventos = eventosExistentes ? JSON.parse(eventosExistentes) : [];
    eventos.push(evento);
    await AsyncStorage.setItem("eventos", JSON.stringify(eventos));
  } catch (error) {
    throw new Error("Erro ao salvar o evento");
  }
};

export async function listarEventos(): Promise<Evento[]> {
  const dados = await AsyncStorage.getItem(CHAVE_EVENTOS);
  return dados ? JSON.parse(dados) : [];
}

export async function limparEventos() {
  await AsyncStorage.removeItem(CHAVE_EVENTOS);
}
