import { createSlice } from '@reduxjs/toolkit';

export interface userDataTypes {
    id: number,
    name: string,
    email: string,
    password: string,
    userDataState:any
}

export interface userDataState {
    userData: userDataTypes[]
    currentUserData: userDataTypes[]
    expanded:userDataTypes[]
}

export interface userDataRootState {
    userData: userDataState
    currentUserData: userDataState
    expanded:userDataState
}

const data = localStorage.getItem("userData")

const newData: userDataTypes[] = data !== null ? JSON.parse(data) : []

const currentUserData = localStorage.getItem("currentUserData")

const newCurrentUserData:userDataTypes[] = currentUserData !== null ? JSON.parse(currentUserData) : []

const expanded : any = localStorage.getItem("expanded")

const initialState :userDataState = {
    userData: newData,
    currentUserData: newCurrentUserData,
    expanded:expanded
}

const userData = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action) => {
            state.userData = action.payload
        },
        setCurrentUserData: (state, action) => {
            state.currentUserData = action.payload
        },
        setExpanded: (state, action) => {
            state.expanded = action.payload
        }
    }
})

export const {setUserData , setCurrentUserData ,setExpanded} = userData.actions

export default userData.reducer