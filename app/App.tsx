import React from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  printText = (projectName: string) => {
    return `Welcome to our Project called ${projectName}`;
  };

  return (
    <View style={styles.container}>
      <Text>{this.printText("Uttpic")}</Text>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
