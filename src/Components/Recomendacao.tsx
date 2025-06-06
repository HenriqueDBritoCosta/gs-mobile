import React from "react";
import { Text, StyleSheet, ScrollView } from "react-native";

const Recomendacao = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📋 Recomendações Preventivas</Text>

      <Text style={styles.description}>
        Estas são orientações úteis para ajudar você e sua comunidade a se
        prepararem melhor para quedas de energia provocadas por eventos naturais
        como tempestades, enchentes, ventos fortes ou incêndios.
      </Text>

      <Text style={styles.sectionTitle}>⚡ Antes da Interrupção</Text>
      <Text style={styles.item}>
        • Mantenha lanternas e baterias carregadas e acessíveis.
      </Text>
      <Text style={styles.item}>
        • Deixe o celular e dispositivos eletrônicos carregados antes de
        tempestades.
      </Text>
      <Text style={styles.item}>
        • Instale detectores de fumaça com baterias de longa duração.
      </Text>
      <Text style={styles.item}>
        • Tenha um estoque de alimentos não perecíveis e água potável.
      </Text>
      <Text style={styles.item}>
        • Use filtros de linha com proteção contra surtos elétricos nos
        eletrodomésticos.
      </Text>
      <Text style={styles.item}>
        • Monte um kit de emergência com lanterna, pilhas, rádio, medicamentos,
        documentos e dinheiro em espécie.
      </Text>
      <Text style={styles.item}>
        • Conheça os pontos de apoio mais próximos e rotas de evacuação da sua
        região.
      </Text>

      <Text style={styles.sectionTitle}>⚠️ Durante a Falta de Energia</Text>
      <Text style={styles.item}>
        • Evite o uso de velas; prefira lanternas a pilha.
      </Text>
      <Text style={styles.item}>
        • Desligue aparelhos da tomada para evitar danos quando a energia
        voltar.
      </Text>
      <Text style={styles.item}>
        • Mantenha a geladeira e o freezer fechados o máximo possível.
      </Text>
      <Text style={styles.item}>
        • Use o celular com moderação para preservar a bateria.
      </Text>
      <Text style={styles.item}>
        • Evite sair de casa durante alagamentos ou tempestades.
      </Text>

      <Text style={styles.sectionTitle}>✅ Após o Retorno da Energia</Text>
      <Text style={styles.item}>
        • Verifique o estado dos alimentos perecíveis.
      </Text>
      <Text style={styles.item}>
        • Ligue os aparelhos eletrônicos gradualmente.
      </Text>
      <Text style={styles.item}>
        • Registre danos e prejuízos no aplicativo.
      </Text>
      <Text style={styles.item}>
        • Compartilhe essas recomendações com sua comunidade.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "justify",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  item: {
    fontSize: 15,
    marginBottom: 6,
    textAlign: "left",
  },
});

export default Recomendacao;
