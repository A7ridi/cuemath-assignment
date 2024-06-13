import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import Signup from "./components/signup/Signup";
import Dashboard from "./components/dashboard/Dashboard";
import { UserDataProvider } from "./context/UserDataContext";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <UserDataProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
      </NavigationContainer>
    </UserDataProvider>
  );
}
