import React,{ Component } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator } from '@react-navigation/stack';
import Login from './screen/Login';
import Registro from './screen/Registro';
import Inicio from './screen/Inicio';
import Principal from './screen/Principal';
import API2 from './screen/APISW';
import API from './api';

const Stack = createStackNavigator();


const App: () => React$Node = () =>{
  return(
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          <Stack.Screen name='Login' component={Login}/>
          <Stack.Screen name='Registro' component={Registro}/>
          <Stack.Screen name='Inicio' component={Inicio}/>
          <Stack.Screen name='Principal' component={Principal}/>
          <Stack.Screen name='APISW' component={APISW}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default App;