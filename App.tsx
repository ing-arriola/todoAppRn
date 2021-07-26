import React from 'react'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {StoreContext} from 'storeon/react'
import store from './src/store/store'
import MainNavigator from './src/navigation/MainNavigator'

const App = () => {
  return (
    <StoreContext.Provider value={store}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </StoreContext.Provider>
  )
}

export default App
