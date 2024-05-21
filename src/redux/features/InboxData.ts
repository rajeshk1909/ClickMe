import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface inboxDataType {
    id:number
    label: string
}

export interface inboxDataState {
    inboxNav:inboxDataType
}

const nav = localStorage.getItem("inboxNav")
const newNav : inboxDataType = nav !== null ? JSON.parse(nav) : {
    id: 0,
    label:"Important"
}

const initialState = {
    inboxNav :newNav
}

const inboxDataSlice = createSlice({
    name: "inboxData",
    initialState,
    reducers: {
        setInBoxNav: (state, action : PayloadAction<inboxDataType>) => {
            state.inboxNav = action.payload
        }
    }
})

export const {setInBoxNav} = inboxDataSlice.actions

export default inboxDataSlice.reducer