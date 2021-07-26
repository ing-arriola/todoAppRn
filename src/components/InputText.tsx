import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  TextInput,
} from 'react-native'
import Colors from '../constants/Colors'

interface Props {
  title: string
  value: string
  onChange: (value: string) => void
  editable?: boolean
}

const InputText = ({title, value, onChange, editable = true}: Props) => {
  return (
    <View style={{width: Dimensions.get('window').width / 1.3}}>
      <Text>{title}</Text>
      <View
        style={[
          styles.inputContainer,
          {
            backgroundColor: Colors.gray10,
          },
        ]}>
        <TextInput
          style={{
            flex: 1,
            color: '#000',
            fontSize: 16,
            height: Platform.OS === 'android' ? 40 : 20,
            zIndex: 1,
          }}
          keyboardType={'email-address'}
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChangeText={onChange}
          editable={editable}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    margin: 10,
    paddingLeft: 10,
    height: Dimensions.get('window').height / 18,
    alignSelf: 'center',
    zIndex: -1,
  },
  labelInput: {
    color: '#666666',
  },
})

export default InputText
