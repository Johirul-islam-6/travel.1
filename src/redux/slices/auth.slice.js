import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../../hooks/hook.axios'

const AUTHLOGIN = createAsyncThunk('auth/login',async(user,thunk)=>{
  const response = await axios.post('/auth/login',{username:'minhaz',password:'123'})
  return response.data
})

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
     data:null,
     isSuccess: false,
     loading: false,
     error:""
    
  },
  reducers: {
        increment: state => {
          state.data = { name:"minhaz"}
        },
  },
  extraReducers:{
    [AUTHLOGIN.fulfilled]: (state, action) => {
      state.data = 'logion '
    }
  }
})

export {AUTHLOGIN }
export const { increment } = authSlice.actions

export default authSlice.reducer