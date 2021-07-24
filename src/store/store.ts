import {createStoreon} from 'storeon'
import {TasksModule, TasksModuleEvents, TasksModuleState} from './tasks'
export type State = TasksModuleState
export type Events = TasksModuleEvents
const store = createStoreon<State, Events>([TasksModule])

export default store
