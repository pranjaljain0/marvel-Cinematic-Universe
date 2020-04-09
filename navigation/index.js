import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import Home from '../screens/Home';
import MovieSingle from '../screens/MovieSingle';

const Stack=createStackNavigator()

const index = () => {
    return (
        <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ed1d24',
            height:140,
          },
          headerTintColor: '#fff',
          headerTitleStyle:{
            fontFamily:'marvel',
            fontSize:70
          }
        }}>
          <Stack.Screen name="Home" component={Home} options={{
            title:"MARVEL",
            
          }}/>
          <Stack.Screen
            name="singleMovie"
            component={MovieSingle}
            options={({ route }) => ({ title: route.params.title, headerTitleStyle: 'ProductSans'})}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default index

const styles = StyleSheet.create({
  headerTitleStyleSheet:{

  }
})
