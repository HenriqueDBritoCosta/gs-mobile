import { createDrawerNavigator } from "@react-navigation/drawer";
import Localizacao from "../Components/Localizacao";
import Interrupcao from "../Components/Interrupcao";
import Prejuizo from "../Components/Prejuizos"; 
import Recomendacao from "../Components/Recomendacao"; 
import PanoramaGeral from "../Components/PanoramaGeral";
import MyDrawer from "../Components/MyDrawer";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";


const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <MyDrawer {...props} />}>
      <Drawer.Screen
        name="Panorama Geral"
        component={PanoramaGeral}
        options={{
          drawerIcon: (props) => (
            <FontAwesomeIcon icon={faHome} color={props.color} />
          ),
        }}
      />
      <Drawer.Screen name="Localizações Atingidas" component={Localizacao} />
      <Drawer.Screen name="Tempo de Interrupção" component={Interrupcao} />
      <Drawer.Screen name="Prejuízos Causados" component={Prejuizo} />
      <Drawer.Screen name="Recomendação" component={Recomendacao} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
