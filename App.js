import { ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home/Home";
import LiveShow from "./src/screens/LiveShow/LiveShow";
import AddNew from "./src/screens/AddNew/AddNew";
import Details from "./src/screens/Details/Details";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="LiveShow" component={LiveShow} />
          <Stack.Screen name="AddNew" component={AddNew} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
