import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';

const Stack=createStackNavigator()

const index = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Marvel" component={Home}/>
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({})
