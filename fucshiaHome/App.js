import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Routes from "./src/routes/";
import { StatusBar } from "react-native";



export default function App() {
  return (
    <NavigationContainer>      
      <StatusBar backgroundColor="#FF00FF" barStyle="dark-content" />
      <Routes />
    </NavigationContainer>    
  );
}

