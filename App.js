import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';

export default function App() {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      console.log("state ", state)
      setIsOnline(state.isConnected);
    });

    
    return () => {
      unsubscribe(); // Remova o ouvinte quando o componente for desmontado
    };
  }, []);



  return (
    <View style={styles.container}>
      <Text> {isOnline ? "Usuário Online" : "Usuário Offline"}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
