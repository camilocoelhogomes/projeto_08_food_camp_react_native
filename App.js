import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    Righteous: require('./assets/fonts/Righteous-Regular.ttf'),
    Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    RobotBold: require('./assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) return null;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
});
