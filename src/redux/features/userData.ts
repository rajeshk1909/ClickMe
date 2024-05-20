import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserDataTypes {
    id?: number | string
    name?: string 
    email?: string
    password?: string
    expanded?: boolean
    toggleSwitch?: boolean
    navbarLabel?: string
    navbarId?:number | undefined
}

export interface UserDataState {
    userData: UserDataTypes[];
    currentUserData: UserDataTypes;
    expanded: boolean; 
    toggleSwitch: boolean;
    navbar:UserDataTypes
}

const userdata = localStorage.getItem("userData");
const newUserData: UserDataTypes[] = userdata !== null ? JSON.parse(userdata) : [];

const currentUserData = localStorage.getItem("currentUserData");
const newCurrentUserData: UserDataTypes = currentUserData !== null ? JSON.parse(currentUserData) : [];

const switchData = localStorage.getItem("toggleSwitch");
const newSwitchData: boolean = switchData !== null ? JSON.parse(switchData) : true;

const navbar = localStorage.getItem("navbar");
const newNavbar: UserDataTypes = navbar !== null ? JSON.parse(navbar) : {
    navbarLabel: "Home",
    navbarId :1
}

const initialState: UserDataState = {
    userData: newUserData,
    currentUserData: newCurrentUserData,
    expanded: false,
    toggleSwitch: newSwitchData,
    navbar:newNavbar,
};

const userDataSlice = createSlice({
    name: "userData",
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<UserDataTypes[]>) => {
            state.userData = action.payload;
        },
        setCurrentUserData: (state, action: PayloadAction<UserDataTypes>) => {
            state.currentUserData = action.payload;
        },
        setExpanded: (state, action: PayloadAction<boolean>) => { 
            state.expanded = action.payload;
        },
        setToggleSwitchData: (state, action: PayloadAction<boolean>) => { 
            state.toggleSwitch = action.payload;
        },
        setNavbar: (state, action: PayloadAction<UserDataTypes>) => {
            state.navbar = action.payload
        }
    },
});

export const { setUserData, setCurrentUserData, setExpanded, setToggleSwitchData, setNavbar } = userDataSlice.actions;

export default userDataSlice.reducer;
