import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import PanoramaGeral from "../Components/PanoramaGeral";
import DetalhesEvento from "../Components/DetalhesEvento";

const Stack = createStackNavigator();

const PanoramaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PanoramaGeral"
        component={PanoramaGeral}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DetalhesEvento"
        component={DetalhesEvento}
        options={{ title: "Detalhes do Evento" }}
      />
    </Stack.Navigator>
  );
};

export default PanoramaStack;
