import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from '../counter';


const store = configureStore({
    reducer: {
        // all reducers
        counter: CounterSlice.reducer,
        
    },
})

export default store;