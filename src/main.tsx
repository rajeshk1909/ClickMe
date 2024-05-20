import React from "react"
import ReactDOM from "react-dom/client"
import App from "./app/Home/page/App.tsx"
import "./index.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./Auth/Login/Login.tsx"
import SignUp from "./Auth/SignUp/SignUp.tsx"
import { Provider } from "react-redux"
import store from "./redux/store/store.ts"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='Login' element={<Login />} />
          <Route path='SignUp' element={<SignUp />} />
          <Route path='Home' element={<App />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
