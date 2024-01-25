// In App.js in a new project

import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Loginscreen from './screens/Loginscreen';
import SignupScreen from './screens/SignupScreen';
import Logindashboard from './screens/Logindashboard';
import SplashScreen from './screens/SplashScreen';



function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
      <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={Loginscreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Logindashboard" component={Logindashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





