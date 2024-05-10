import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Settings from './Settings';
import Home from './Home';
import Products from './Products';
import Bags from './Bags';

const Tab = createBottomTabNavigator();

const Homescreen = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="home" color={'purple'} size={25} />
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={Products}
        options={{
          tabBarIcon: ({color, size }) => (
            <AntDesign name="appstore-o" color={'purple'} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Bags"
        component={Bags}
        options={{
          tabBarIcon: ({color, size}) => (
            <Ionicons name="bag-outline" color={'purple'} size={23} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({color, size}) => (
            <AntDesign name="setting" color={'purple'} size={23} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Homescreen;
