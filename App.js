import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';

import Card from "./src/components/card"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>

     <Card name={"Eddard Stark"} text="Hello World ! This is a first react native app of me." buttonText="I Like" />

     <Card name={"Tarkan "} text="Abi bilgisayarımı getirir misin !!" buttonText="I Like" />

     <Card name={"Arif Yılmaz"} text="Uzaylılara tarafından kaçırıldım, evet tarafından." buttonText="I Like" />

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
