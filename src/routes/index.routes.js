import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../pages/Login";
import Terms from "../pages/Terms";
import Appointments from "../pages/Appointments";
import Home from "../pages/Home";
import Ticket from "../pages/Ticket";
import CPF from "../pages/Register/CPF";
import Phone from "../pages/Register/Phone";
import Confirm from "../pages/Register/Confirm";
import Password from "../pages/Register/Password";
import Success from "../pages/Register/Success";

export default function Routes() {
    const Stack = createStackNavigator()

    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: 0
                }}
            />
            <Stack.Screen
                name='Terms'
                component={Terms}
                options={{
                    headerShown: 0
                }}
            />
            <Stack.Screen
                name='Appointments'
                component={Appointments}
            />
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: 0, 
                    headerLeft: null
                }}
            />
            <Stack.Screen
                name='Ticket'
                component={Ticket}
                options={{
                    title: '', 
                    headerStyle: {
                        elevation: 0, // Remove a sombra no Android
                        shadowOpacity: 0, // Remove a sombra no iOS
                        borderBottomWidth: 0, // Se você também quiser remover a linha inferior do header
                      }
                }}
            />
            <Stack.Screen
                name='CPF'
                component={CPF}
                options={{
                    title: '', 
                    headerStyle: {
                        elevation: 0, // Remove a sombra no Android
                        shadowOpacity: 0, // Remove a sombra no iOS
                        borderBottomWidth: 0, // Se você também quiser remover a linha inferior do header
                      }
                }}
            />
            <Stack.Screen
                name='Phone'
                component={Phone}
                options={{
                    title: '', 
                    headerStyle: {
                        elevation: 0, // Remove a sombra no Android
                        shadowOpacity: 0, // Remove a sombra no iOS
                        borderBottomWidth: 0, // Se você também quiser remover a linha inferior do header
                      }
                }}
            />
            <Stack.Screen
                name='Confirm'
                component={Confirm}
                options={{
                    title: '', 
                    headerStyle: {
                        elevation: 0, // Remove a sombra no Android
                        shadowOpacity: 0, // Remove a sombra no iOS
                        borderBottomWidth: 0, // Se você também quiser remover a linha inferior do header
                      }
                }}
            />
            <Stack.Screen
                name='Password'
                component={Password}
                options={{
                    title: '', 
                    headerStyle: {
                        elevation: 0, // Remove a sombra no Android
                        shadowOpacity: 0, // Remove a sombra no iOS
                        borderBottomWidth: 0, // Se você também quiser remover a linha inferior do header
                      }
                }}
            />
            <Stack.Screen
                name='Success'
                component={Success}
                options={{
                    title: '', 
                    headerStyle: {
                        elevation: 0, // Remove a sombra no Android
                        shadowOpacity: 0, // Remove a sombra no iOS
                        borderBottomWidth: 0, // Se você também quiser remover a linha inferior do header
                      }
                }}
            />
        </Stack.Navigator>
    )
}
