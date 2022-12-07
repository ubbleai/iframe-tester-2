import { createSlice } from '@reduxjs/toolkit'

import { RootState } from '../../../store'
import { UbbleProps } from '../types'

const initialState: UbbleProps = {
  identificationUrl: null,
  width: '100%',
  height: '100%',
  allowCamera: true
}

export const iframeSlice = createSlice({
  name: 'iframe',
  initialState,
  reducers: {
    setProps: (state, action) => {
      return action.payload
    }
  }
})

export default iframeSlice

export const selectIframeProps = (state: RootState) => state.iframe

export const { setProps } = iframeSlice.actions
