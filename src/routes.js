import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from './pages/Login';
import { ToDo } from './pages/ToDo';

const Stack = createStackNavigator();

export function Routes(){
    return(
        <Stack.Navigator>
            <Stack.Screen name='login' component={Login}  options={{ headerShown: false  }} />
            <Stack.Screen name='todo' component={ToDo}  options={{ headerShown: false  }} />
        </Stack.Navigator>
    );
}

