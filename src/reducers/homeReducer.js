import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  value: 0,
  data: [],
}

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    incremented: (state, payload) => {
      console.log(state, payload)
      state.value += 1
    },
    decremented: (state) => {
      state.value -= 1
    },
  },
})
export const { incremented, decremented } = homeSlice.actions
export const initState = (state) => state.home.value

export default homeSlice
