import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Voca from '../../pages/Voca/Voca';
import VocaSet from '../../pages/VocaSet/VocaSet';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomTab = createMaterialBottomTabNavigator();

export default function Navigation() {
  return (
    <BottomTab.Navigator
      barStyle={{ backgroundColor: '#fff' }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          return (
            <FontAwesome5
              name={route.name === 'Voca' ? 'amilia' : 'plus-square'}
              size={focused ? 17 : 15}
              color={focused ? '#000' : '#555'}
            />
          );
        },
        tabBarColor: '#000',
      })}
    >
      <BottomTab.Screen name="Voca" component={Voca} />
      <BottomTab.Screen name="Voca Set" component={VocaSet} />
    </BottomTab.Navigator>
  );
}
