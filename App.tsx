import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./src/Navigation/Drawer";


export default function App() {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
}
