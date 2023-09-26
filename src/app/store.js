import { configureStore } from "@reduxjs/toolkit";
import counterRedcuer from "../features/counter/counterSlice";
import showData from "../features/counter/counterSlice"

export const store = configureStore({
  reducer: {
    show: showData, 
   },
});