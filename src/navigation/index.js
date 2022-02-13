import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DogsScreen from '../screens/dogs';
import AddDog from '../screens/dogs/add';
import EditDog from '../screens/dogs/edit';

import { colors } from '../Constants/theme';
const Stack = createNativeStackNavigator();

function DogStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: colors.secondaryColor

                },
                headerTitleStyle: { color: colors.textButtonColor },
                headerTintColor: colors.textButtonColor

            }}
        >
            <Stack.Screen name="Home" component={DogsScreen} options={{ title: "My Dogs" }} />
            <Stack.Screen name="AddDog" component={AddDog} options={{ title: "Add Dog" }}/>
            <Stack.Screen name="EditDog" component={EditDog} options={{ title: "Edit FDog" }} />
        </Stack.Navigator>
    );
}
const MainStackNavigator = () => {

    return (
        <NavigationContainer>
        <DogStack />
        </NavigationContainer>
    )
}
export default MainStackNavigator;