import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './src/screens/Home';
import WordToSignScreen from './src/screens/WordToSignScreen';
import RealTimeDetectionScreen from './src/screens/RealTimeDetectionScreen';
import Login from './src/screens/Login';
import Registration from './src/screens/Registration';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  useEffect(() => {
    if (Platform.OS == 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="WordToSign" component={WordToSignScreen} />
        <Stack.Screen
          name="RealTimeDetection"
          component={RealTimeDetectionScreen}
        />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Registration" component={Registration} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
