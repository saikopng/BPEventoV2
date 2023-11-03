import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MisEventosView from './vistas/MisEventosView';
import EventCreate from './vistas/EventCreate';
import ActividadView from './vistas/ActividadView';
import PerfilView from './vistas/PerfilView';
import HomeScreen from './vistas/HomeScreen';
import StackScreen from './vistas/StackScreen';
import { MaterialCommunityIcons, FontAwesome5, AntDesign, Feather, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: 'purple',
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" size={24} color={color} />
          ),
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Encuentros"
        component={MisEventosView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="users" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="EvntCreate"
        component={EventCreate}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="pluscircleo" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Actividad"
        component={ActividadView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="activity" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilView}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;