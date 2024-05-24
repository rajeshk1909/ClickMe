import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface navbarDataTypes {
    navbarLabel: string
    navbarId: number | undefined
}

export interface navbarStateTypes {
    docsModel: boolean
    navbar: navbarDataTypes
}

const navbar = localStorage.getItem("navbar");
const newNavbar: navbarDataTypes = navbar !== null ? JSON.parse(navbar) : {
    navbarLabel: "Home",
    navbarId :1
}

const initialState :navbarStateTypes = {
    docsModel: false,
    navbar:newNavbar
}

const navbarDataSlice = createSlice({
    name: "navbarData",
    initialState,
    reducers: {
        setDocsModel:(state , action:PayloadAction<boolean>) => {
            state.docsModel = action.payload
        },
        setNavbar: (state, action: PayloadAction<navbarDataTypes>) => {
            state.navbar = action.payload
        }
    }
})

export const {setDocsModel , setNavbar } = navbarDataSlice.actions

export default navbarDataSlice.reducer