import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/Home';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
import OrderCompleted from './src/screens/OrderCompleted';
import RestaurantDetail from './src/screens/RestaurantDetail';
import { useSelector } from 'react-redux';

export default function RootNavigation() {
  const Stack = createStackNavigator();

  const screenOptions = {
    headerShown: false,
  };

  const currentUser = useSelector((state) => state.auth.user);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={screenOptions}>
        {!currentUser ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen
              name="RestaurantDetail"
              component={RestaurantDetail}
            />

            <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
