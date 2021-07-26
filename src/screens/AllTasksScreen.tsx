import React from 'react'
import {StyleSheet} from 'react-native'
import {View, Text, SafeAreaView, Dimensions} from 'react-native'
import ButtonText from '../components/ButtonText'
import Colors from '../constants/Colors'
import {useStoreon} from 'storeon/react'
import {Events, State} from '../store/store'
import {StackScreenProps} from '@react-navigation/stack'
import Wrapper from '../components/Wrapper'
import {ScrollView} from 'react-native-gesture-handler'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

interface Props extends StackScreenProps<any, any> {}
const {width, height} = Dimensions.get('window')

const AllTasksScreen = ({navigation}: Props) => {
  const {tasks} = useStoreon<State, Events>('tasks')
  const tasksToshow = (
    <>
      {tasks.TasksList.map((task, id) => (
        <>
          <BouncyCheckbox
            key={id}
            onPress={() => {}}
            fillColor="#0076A9"
            iconStyle={{borderColor: '#CCC', borderRadius: 0}}
            textStyle={{
              textDecorationLine: 'none',
              fontSize: 13,
            }}
            size={20}
            text={task.title}
          />
        </>
      ))}
    </>
  )

  return (
    <Wrapper>
      <View style={{height: height / 1.3, alignItems: 'center'}}>
        <ScrollView>
          {tasks.TasksList.length > 0 ? (
            tasksToshow
          ) : (
            <Text>There aren't tasks yet</Text>
          )}
        </ScrollView>
        <ButtonText
          text="Add a task"
          onPress={() => navigation.navigate('AddTaskScreen')}
          buttonWidth={1.4}
        />
      </View>
    </Wrapper>
  )
}

export default AllTasksScreen
