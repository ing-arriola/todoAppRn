import React from 'react'
import AllTasksScreen from '../screens/AllTasksScreen'
import CompletedTasksScreen from '../screens/CompletedTasksScreen'
import FavoritesTasksScreen from '../screens/FavoritesTasksScreen'
import UncompletedTasksScreen from '../screens/UncompletedTasksScreen'

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import {SafeAreaView} from 'react-native'

const Tab = createMaterialTopTabNavigator()

const TabsNavigator = () => {
  return (
    <Tab.Navigator tabBarOptions={{labelStyle: {fontSize: 8.5}}}>
      <Tab.Screen name="All" component={AllTasksScreen} />
      <Tab.Screen name="Completed" component={CompletedTasksScreen} />
      <Tab.Screen name="Uncompleted" component={UncompletedTasksScreen} />
      <Tab.Screen name="Favorites" component={FavoritesTasksScreen} />
    </Tab.Navigator>
  )
}

export default TabsNavigator
