import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/Home/page/App.tsx"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Auth/Login/Login.tsx"
import SignUp from "./Auth/SignUp/SignUp.tsx"
import { Provider } from "react-redux"
import store from "./redux/store/store.ts"
import Inbox from "./app/Inbox/page/Inbox.tsx"
import Documents from "./app/Documents/page/Documents.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/' element={<App />} />
          <Route path='/Inbox' element={<Inbox />} />
          <Route path='/docs' element={<Documents />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
