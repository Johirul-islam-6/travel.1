import { configureStore } from '@reduxjs/toolkit'
import masterReducer from '@/redux/reducers/master.reducer'
import { createWrapper  } from 'next-redux-wrapper';



const makeStore = ()=> configureStore({ reducer: masterReducer})

export const wrapper = createWrapper(makeStore, {debug: true});