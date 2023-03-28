import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes/";
import { StatusBar } from "react-native";



export default function App() {
  return (
    <NavigationContainer>      
      <StatusBar backgroundColor="#FFFFFF" barStyle="light-content" />
      <Routes />
    </NavigationContainer>    
  );
}

