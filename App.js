import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen  from './src/containers/Search';
import ListScreen from './src/containers/List';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Search" component={SearchScreen} />
        <Stack.Screen options={{headerShown: false}} name="List" component={ListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export  default App;