import React, {ReactElement} from 'react'
import {View, Text, StyleSheet, Dimensions} from 'react-native'
import Colors from '../constants/Colors'
interface AuxProps {
  children: ReactElement | ReactElement[]
}
const {height, width} = Dimensions.get('window')
const Wrapper = ({children}: AuxProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.whiteContainer}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.gray10,
    flex: 1,
    alignItems: 'center',
  },
  whiteContainer: {
    backgroundColor: '#fff',
    top: 20,
    height: height / 1.2,
    width: width / 1.1,
    borderRadius: 10,
    alignItems: 'center',
  },
})

export default Wrapper
