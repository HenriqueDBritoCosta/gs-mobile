import { createDrawerNavigator } from "@react-navigation/drawer";
import Recomendacao from "../Components/Recomendacao";
import MyDrawer from "../Components/MyDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import PanoramaStack from "./PanoramaStack";
import CadastroStack from "./CadastroStack";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />}>
      <Drawer.Screen
        name="Panorama Geral"
        component={PanoramaStack}
        options={{
          drawerIcon: (props) => (
            <FontAwesomeIcon icon={faHome} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen name="Recomendações" component={Recomendacao} />
      <Drawer.Screen name="Registrar Evento" component={CadastroStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
