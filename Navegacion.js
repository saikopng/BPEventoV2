import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './vistas/LoginScreen';
import RegisterScreen from './vistas/RegisterScreen';
import MyTabs from './MyTabs';

const Stack = createStackNavigator();

export default function Navigation() {
  const [userLoggedIn, setUserLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userLoggedIn ? (
          <Stack.Screen name="Login" options={{ headerShown: false }}>
            {props => <LoginScreen {...props} setUserLoggedIn={setUserLoggedIn} />}
          </Stack.Screen>
        ) : (
          <Stack.Screen name="MyTabs" component={MyTabs} />
        )}
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
