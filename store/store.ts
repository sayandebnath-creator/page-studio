import { configureStore } from "@reduxjs/toolkit"
import draftPageReducer from "@/features/draftPage/draftPageSlice"
import { loadState, saveState } from "@/lib/localStorage"

export const store = configureStore({
  reducer: {
    draftPage: draftPageReducer,
  },
  preloadedState:{
    draftPage: loadState()
  }
})

store.subscribe(()=>{
  saveState(store.getState().draftPage)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch