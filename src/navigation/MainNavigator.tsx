import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import TabsNavigator from './TabsNavigator'
import AddTaskScreen from '../screens/AddTaskScreen'

const Stack = createStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={{title: 'Board'}}
      />
      <Stack.Screen
        name="AddTaskScreen"
        component={AddTaskScreen}
        options={{title: 'Add task'}}
      />
    </Stack.Navigator>
  )
}

export default MainNavigator
