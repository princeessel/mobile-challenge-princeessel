import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, Splash } from '../screens';
import { FavouriteScreen } from '../screens/FavouriteScreen';



const Stack = createNativeStackNavigator();

function MainNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator >
                <Stack.Screen options={{ headerShown: false }} name="SplashScreen" component={Splash} />
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                    name="HomeScreen"
                    component={HomeScreen}
                />
                <Stack.Screen options={{ headerShown: false }} name="FavouriteScreen" component={FavouriteScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export { MainNavigation };