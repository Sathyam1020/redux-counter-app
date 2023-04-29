import { configureStore } from "@reduxjs/toolkit";
//* TO MAKE A CENTRALIZED STORE WE HAVE TO USE CONFIGURE STORE HOOK: 

import CounterSlice from "./slices/CounterSlice";

export const store = configureStore({
    reducer: {
        counter: CounterSlice, 
    }, 
});