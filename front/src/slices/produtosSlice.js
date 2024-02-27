import { createSlice } from '@reduxjs/toolkit'
import { financas } from '../db/financas'

export const counterSlice = createSlice({
  name: 'financa',
  initialState: {
    value: financas,
  },
  reducers: {
  },
})

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer