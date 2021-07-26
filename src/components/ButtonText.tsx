import React from 'react'
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native'
import Colors from '../constants/Colors'

interface Props {
  onPress: () => void
  text: string
  buttonWidth: number
}

const ButtonText = ({onPress, text, buttonWidth}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.75}
      style={[
        styles.button,
        {width: Dimensions.get('window').width / buttonWidth},
      ]}
      onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: Dimensions.get('window').height / 18,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.green,
  },
  btnText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#fff',
  },
})

export default ButtonText
