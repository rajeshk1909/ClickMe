import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserDataTypes {
    id: number;
    name: string;
    email: string;
    password: string;
}

export interface UserDataState {
    userData: UserDataTypes[];
    currentUserData: UserDataTypes[];
    expanded: boolean; 
    toggleSwitch: boolean; 
}

export interface userDataRootState {
    userData: UserDataState;
    currentUserData: UserDataState;
    expanded: UserDataState; 
    toggleSwitch: UserDataState;
}

const userdata = localStorage.getItem("userData");
const newUserData: UserDataTypes[] = userdata !== null ? JSON.parse(userdata) : [];

const currentUserData = localStorage.getItem("currentUserData");
const newCurrentUserData: UserDataTypes[] = currentUserData !== null ? JSON.parse(currentUserData) : [];

const expandedData = localStorage.getItem("expanded");
const newExpanded: boolean = expandedData !== null ? JSON.parse(expandedData) : false;

const switchData = localStorage.getItem("toggleSwitch");
const newSwitchData: boolean = switchData !== null ? JSON.parse(switchData) : true;

const initialState: UserDataState = {
    userData: newUserData,
    currentUserData: newCurrentUserData,
    expanded: newExpanded,
    toggleSwitch: newSwitchData,
};

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserDataTypes[]>) => {
            state.userData = action.payload;
        },
        setCurrentUserData: (state, action: PayloadAction<UserDataTypes[]>) => {
            state.currentUserData = action.payload;
        },
        setExpanded: (state, action: PayloadAction<boolean>) => { 
            state.expanded = action.payload;
        },
        setToggleSwitchData: (state, action: PayloadAction<boolean>) => { 
            state.toggleSwitch = action.payload;
        },
    },
});

export const { setUserData, setCurrentUserData, setExpanded, setToggleSwitchData } = userDataSlice.actions;

export default userDataSlice.reducer;
