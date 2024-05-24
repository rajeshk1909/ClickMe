import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export interface UserDataTypes {
    id?: number | string
    name?: string 
    email?: string
    password?: string
    expanded?: boolean
    toggleSwitch?: boolean
    isUserLogIn?: boolean
}
export interface UserDataState {
    userData: UserDataTypes[];
    currentUserData: UserDataTypes;
    expanded: boolean; 
    toggleSwitch: boolean;
    isUserLogIn:boolean
}

const userdata = localStorage.getItem("userData");
const newUserData: UserDataTypes[] = userdata !== null ? JSON.parse(userdata) : [];

const currentUserData = localStorage.getItem("currentUserData");
const newCurrentUserData: UserDataTypes = currentUserData !== null ? JSON.parse(currentUserData) : {
        id: "",
        name: "",
        email: "",
        password: "",
      }

const switchData = localStorage.getItem("toggleSwitch");
const newSwitchData: boolean = switchData !== null ? JSON.parse(switchData) : true;


const logIn = localStorage.getItem("isUserLogin")
const newLogIn :boolean = logIn !== null ? JSON.parse(logIn) : false 

const initialState: UserDataState = {
    userData: newUserData,
    currentUserData: newCurrentUserData,
    expanded: false,
    toggleSwitch: newSwitchData,
    isUserLogIn : newLogIn,
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
        setIsUserLogIn: (state, action: PayloadAction<boolean>) => {
            state.isUserLogIn = action.payload
        }
    },
});

export const { setUserData, setCurrentUserData, setExpanded, setToggleSwitchData ,setIsUserLogIn } = userDataSlice.actions;

export default userDataSlice.reducer;
