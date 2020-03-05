import 'react-native-gesture-handler';
import React from 'react';
import Registro from './Registro/Registro';
import Login from './Login/Login';
import Perfil from './Perfil/perfil';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () =>React$Node = () => {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName='Login'>
       <Stack.Screen 
       name='Login'
       component={Login}/>
       <Stack.Screen 
       name='Registro'
       component={Registro}/>
        <Stack.Screen 
       name='Perfil'
       component={Perfil}/>
     </Stack.Navigator>
   </NavigationContainer>
    );
  };





export default App;