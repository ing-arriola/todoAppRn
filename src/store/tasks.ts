import {createSubstore} from 'storeon-substore'
import {StoreonStore} from 'storeon'
import {State, Events} from './store'
import {Task} from '../interfaces/tasks'
const sliceName = 'account'

export interface TasksModuleState {
  [sliceName]: {
    TasksList: Task[]
  }
}

export const AddTaskEvent = 'AddTask'
export const UpdateTaskEvent = 'UpdateTask'

export interface TasksModuleEvents {
  [AddTaskEvent]: Task
  [UpdateTaskEvent]: Task
}

export const TasksModule = (parentStore: StoreonStore<State, Events>) => {
  const store = createSubstore(parentStore, sliceName)

  store.on('@init', () => ({
    TasksList: [],
  }))

  store.on(AddTaskEvent, (user, data) => ({
    TasksList: [...user.TasksList, data],
  }))

  store.on(UpdateTaskEvent, (user, data) => ({
    TasksList: user.TasksList.map(singleTask =>
      singleTask.id === data.id ? data : singleTask,
    ),
  }))
}
