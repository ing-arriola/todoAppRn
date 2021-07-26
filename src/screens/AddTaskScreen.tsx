import React, {useState} from 'react'
import {
  View,
  Text,
  Platform,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import {TextInput} from 'react-native-gesture-handler'
import {SafeAreaView} from 'react-native-safe-area-context'
import {useStoreon} from 'storeon/react'
import ButtonText from '../components/ButtonText'
import InputText from '../components/InputText'
import Wrapper from '../components/Wrapper'
import Colors from '../constants/Colors'
import {Events, State} from '../store/store'
import DateTimePicker from '@react-native-community/datetimepicker'
import {StackScreenProps} from '@react-navigation/stack'

const {width, height} = Dimensions.get('window')
interface Props extends StackScreenProps<any, any> {}

const AddTaskScreen = ({navigation}: Props) => {
  const {dispatch, tasks} = useStoreon<State, Events>('tasks')
  const [show, setShow] = useState(false)
  const [task, settask] = useState({
    title: '',
    date: '',
    deadline: new Date(),
    startTime: new Date(),
    endTime: '',
    remind: '',
    repeat: '',
  })

  const onChange = (event: Event, selectedDate: Date | undefined) => {
    const currentDate = selectedDate || task.deadline
    setShow(Platform.OS === 'ios')

    const currentYear = new Date().getFullYear()
    const year = currentDate.getFullYear()

    const dia = String(currentDate.getDate()).padStart(2, '0')
    const mes = String(currentDate.getMonth() + 1).padStart(2, '0')

    settask({...task, deadline: currentDate, date: `${dia}/${mes}/${year}`})
  }

  const DeadlineAndroid = (
    <TouchableOpacity onPress={() => setShow(true)}>
      <InputText
        title="Deadline"
        value={task.date}
        onChange={() => {}}
        editable={false}
      />
    </TouchableOpacity>
  )

  const DeadLineIos = (
    <View
      style={{
        width: Dimensions.get('window').width,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Deadline</Text>

      <DateTimePicker
        style={{
          width: '20%',
        }}
        textColor="red"
        value={task.deadline}
        mode={'date'}
        display="default"
        onChange={(e: Event, value: Date | undefined) => onChange(e, value)}
      />
    </View>
  )

  return (
    <Wrapper>
      <View
        style={{
          height: height / 1.3,
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <InputText
          title="Title"
          value={task.title}
          onChange={value => settask({...task, title: value})}
        />

        {Platform.OS === 'android' ? DeadlineAndroid : DeadLineIos}
        <>
          {show === true && Platform.OS === 'android' && (
            <DateTimePicker
              value={task.deadline}
              mode={'date'}
              display="default"
              onChange={(e: Event, value: Date | undefined) =>
                onChange(e, value)
              }
            />
          )}
        </>

        <ButtonText
          text="Create a task"
          onPress={() => {
            dispatch('AddTask', {
              id: tasks.TasksList.length + 1,
              title: task.title,
              deadline: task.deadline,
            })
            navigation.goBack()
          }}
          buttonWidth={1.4}
        />
      </View>
    </Wrapper>
  )
}

export default AddTaskScreen
