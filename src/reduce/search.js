import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchVal:''
}

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchVal(state, action) {
      state.searchVal = action.payload
    }
  }
})

export const { setSearchVal } = search.actions 

export default search.reducer