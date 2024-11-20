import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { RootState } from '../../../store'
import { Log } from '../types'

interface State {
  logs: Log[]
  drawerOpen: boolean
}

const initialState: State = {
  logs: [],
  drawerOpen: false
}

const logsSlice = createSlice({
  name: 'logs',
  initialState,
  reducers: {
    addLog: (state, { payload }: PayloadAction<string>) => {
      state.logs.push({
        date: new Date().toISOString(),
        content: payload
      })
    },
    toggleDrawer: (state) => {
      state.drawerOpen = !state.drawerOpen
    },
    closeDrawer: (state) => {
      state.drawerOpen = false
    },
    openDrawer: (state) => {
      state.drawerOpen = true
    }
  }
})

export const { addLog, openDrawer, toggleDrawer, closeDrawer } =
  logsSlice.actions

export const selectLogs = (state: RootState) => state.logs.logs
export const selectDrawerOpen = (state: RootState) => state.logs.drawerOpen

export default logsSlice
