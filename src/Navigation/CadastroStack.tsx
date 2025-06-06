import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import CadastroLocalizacao from "../Components/CadastroLocalizacao";
import CadastroInterrupcao from "../Components/CadastroInterrupcao";
import CadastroPrejuizos from "../Components/CadastroPrejuizos";
import PanoramaGeral from "../Components/PanoramaGeral";

const Stack = createNativeStackNavigator();

const CadastroStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="CadastroLocalizacao"
        component={CadastroLocalizacao}
      />
      <Stack.Screen
        name="CadastroInterrupcao"
        component={CadastroInterrupcao}
      />
      <Stack.Screen name="CadastroPrejuizos" component={CadastroPrejuizos} />
      <Stack.Screen name="PanoramaGeral" component={PanoramaGeral} />
    </Stack.Navigator>
  );
};

export default CadastroStack;