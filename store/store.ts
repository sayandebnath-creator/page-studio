import { configureStore } from "@reduxjs/toolkit"
import draftPageReducer from "@/features/draftPage/draftPageSlice"

export const store = configureStore({
  reducer: {
    draftPage: draftPageReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch