import { ActionTypes } from './actions'

export type Cycle = {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export type CyclesStateType = {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CyclesStateType, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CYCLE: {
      return {
        ...state,
        cycles: [...state.cycles, action.payload.newCycle],
        activeCycleId: action.payload.newCycle.id,
      }
    }
    case ActionTypes.INTERRUPTED_CURRENT_CYCLE: {
      return {
        ...state,
        cycles: state.cycles.map((cycle: Cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, interruptedDate: new Date() }
          }
          return cycle
        }),
        activeCycleId: null,
      }
    }
    case ActionTypes.MARK_CURRENT_CYCLE_AS_FINISHED: {
      return {
        ...state,
        cycles: state.cycles.map((cycle: Cycle) => {
          if (cycle.id === state.activeCycleId) {
            return { ...cycle, finishedDate: new Date() }
          }
          return cycle
        }),
        activeCycleId: null,
      }
    }
    default: {
      return state
    }
  }
}
