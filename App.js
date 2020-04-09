import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from "./navigation/index"
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';


export default function App() {

  let [fontsLoaded] = useFonts({
    'marvel': require('./assets/fonts/marvel.ttf'),
    'ProductSans': require('./assets/fonts/ProductSans.ttf'),
    'ProductSansBold': require('./assets/fonts/ProductSansBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
  return (
    <Navigator/>
  );
  }
}