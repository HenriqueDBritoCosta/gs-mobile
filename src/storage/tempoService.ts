import AsyncStorage from '@react-native-async-storage/async-storage';

const TEMPO_KEY = '@duracao_interrupcao';

export async function salvarDuracao(duracao: string): Promise<void> {
  await AsyncStorage.setItem(TEMPO_KEY, duracao);
}

export async function obterDuracao(): Promise<string | null> {
  return await AsyncStorage.getItem(TEMPO_KEY);
}
