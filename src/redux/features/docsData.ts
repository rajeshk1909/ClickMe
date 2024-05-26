import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export interface docsDataTypes {
  id: number
  label:string
}

export interface docsDataStatetypes {
  docsNav:docsDataTypes
}

const docsNav = localStorage.getItem("docsNav")
const newDocsNav: docsDataTypes = docsNav !== null ? JSON.parse(docsNav) : {
  id: 0,
  label:"All",
}

const initialState :docsDataStatetypes = {
  docsNav: newDocsNav
}

const docsDataSlice = createSlice({
  name: "docsData",
  initialState,
  reducers: {
    setDocsNav: (state, action : PayloadAction<docsDataTypes>) => {
      state.docsNav = action.payload
    }
  },
})

export const {setDocsNav} = docsDataSlice.actions

export default docsDataSlice.reducer
