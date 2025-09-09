import React, { createContext, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import HomePage from "./Components/HomePage";
import Publish from "./Components/Publish";
import Dashboard from "./Components/Dashboard";
import MoreDetails from "./Components/MoreDetails";
import Cart from "./Components/Cart";
import PrivateAccess from "./Components/PrivateAccess";
import Empower from "./Components/Empower";
import SearchedData from "./Components/SearchedData";
import Categories from "./Components/Categories";
import MyAccount from "./Components/MyAccount";
import Success from "./Components/Payments/Success";
import Cancel from "./Components/Payments/Cancel";
export const ShowPopContext = createContext();

const App = ({ children }) => {
  const [showpop, setshowpop] = useState(false);

  return (
    <ShowPopContext.Provider value={{ showpop, setshowpop }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>

          <Route path="/user">
            <Route
              path="dashboard"
              element={
                <PrivateAccess>
                  <Dashboard />
                </PrivateAccess>
              }
            ></Route>

            <Route
              path="publish"
              element={
                <PrivateAccess>
                  <Publish />
                </PrivateAccess>
              }
            ></Route>

            <Route
              path="cart"
              element={
                <PrivateAccess>
                  <Cart />
                </PrivateAccess>
              }
            ></Route>

            <Route
              path=":id"
              element={
                <PrivateAccess>
                  <MyAccount />
                </PrivateAccess>
              }
            ></Route>
          </Route>

          <Route path="/user/dashboard/more" element={<MoreDetails />}></Route>

          <Route path="/empowering/:id" element={<Empower />}></Route>

          <Route path="/search/:id?" element={<SearchedData />}></Route>

          <Route path="/category/:id" element={<Categories />}></Route>

          <Route path="/success" element={<Success />}></Route>

          <Route path="/cancel" element={<Cancel />}></Route>
        </Routes>
      </Router>
      {children}
    </ShowPopContext.Provider>
  );
};

export default App;
