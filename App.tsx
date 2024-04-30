//Imports
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-reanimated'
import 'react-native-gesture-handler'

//Routes
import Home from './src/Routes/Home/Home'
import Onboarding from './src/Routes/Onboarding/Onboarding';

//Redux
import { Provider } from 'react-redux';
import { store } from './src/store/store';

//Creating Stack Navigator
const Stack = createNativeStackNavigator();


//Talk is cheap, show me the code!
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName='Onboarding'>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding} />
          <Stack.Screen
            name="Home"
            component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}