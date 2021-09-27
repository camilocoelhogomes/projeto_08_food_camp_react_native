import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Header from './src/components/Header';
import { useFonts } from 'expo-font';
import Menus from './src/components/Menus';
import menuData from './src/assets/data/menuData';

export default function App() {
  const [menus, setMenus] = useState(menuData);


  const [loaded] = useFonts({
    Righteous: require('./src/assets/fonts/Righteous-Regular.ttf'),
    Roboto: require('./src/assets/fonts/Roboto-Regular.ttf'),
    RobotBold: require('./src/assets/fonts/Roboto-Bold.ttf'),
  });

  if (!loaded) return null;



  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Menus
        menus={menus}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexGrow: 1,
  },
});
