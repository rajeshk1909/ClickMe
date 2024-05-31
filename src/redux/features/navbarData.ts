import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface NavbarDataTypes {
    navbarLabel: string;
    navbarId: number | undefined;
}
export interface SliderButtonDataTypes {
    id: number;
    icon: string;
    buttonLabel: string;
    btn: boolean
    more:boolean
}
export interface NavbarStateTypes {
    docsModel: boolean;
    navbar: NavbarDataTypes;
    slidebarButtons: SliderButtonDataTypes[][];
}

const navbar = localStorage.getItem("navbar");
const newNavbar: NavbarDataTypes = navbar !== null ? JSON.parse(navbar) : {
    navbarLabel: "Home",
    navbarId: 1,
}

const slidebarBtn = localStorage.getItem("slidebarButton");
const newSlidebarBtn: SliderButtonDataTypes[][] = slidebarBtn !== null ? JSON.parse(slidebarBtn) : [
    [
        { id: 1, icon: "GoHome", buttonLabel: "Home" , btn:true ,more:false},
        { id: 2, icon: "FiInbox", buttonLabel: "Inbox" , btn:true ,more:false },
        { id: 3, icon: "IoDocumentTextOutline", buttonLabel: "Docs" , btn:true ,more:true },
        { id: 4, icon: "MdOutlineDashboard", buttonLabel: "Dashboards" , btn:true ,more:true},
        { id: 5, icon: "GoVideo", buttonLabel: "Clips" , btn:true ,more:true },
        { id: 6, icon: "FaRegClipboard", buttonLabel: "Whiteboards", btn: false, more: true },
        { id: 7, icon: "RxLapTimer", buttonLabel: "Timesheets", btn: false, more: true },
        {id : 8, icon : "IoMdWifi" , buttonLabel:"Pulse" , btn:false ,more:true},
        {id : 9, icon : "BsTrophy" , buttonLabel:"Goals" , btn:false ,more:true},
    ],
    [
        { id: 10, icon: "FaRegStar", buttonLabel: "Favorites" , btn:true ,more:false },
        { id: 11, icon: "RxDashboard", buttonLabel: "Spaces" , btn:true ,more:false },
    ],
    [
        { id: 12, icon: "BsPersonFillAdd", buttonLabel: "Invite" , btn:true ,more:false },
        { id: 13, icon: "IoHelpCircleOutline", buttonLabel: "Resource center" , btn:true ,more:false },
    ],
];

const initialState: NavbarStateTypes = {
    docsModel: false,
    navbar: newNavbar,
    slidebarButtons: newSlidebarBtn,
};

const navbarDataSlice = createSlice({
    name: "navbarData",
    initialState,
    reducers: {
        setDocsModel: (state, action: PayloadAction<boolean>) => {
            state.docsModel = action.payload;
        },
        setNavbar: (state, action: PayloadAction<NavbarDataTypes>) => {
            state.navbar = action.payload;
        },
       setSlidebarButtons: (state, action: PayloadAction<SliderButtonDataTypes[][]>) => {
            state.slidebarButtons = action.payload;
        }
    },
});

export const { setDocsModel, setNavbar ,setSlidebarButtons } = navbarDataSlice.actions;
export default navbarDataSlice.reducer;