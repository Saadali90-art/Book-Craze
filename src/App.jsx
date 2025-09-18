import React, { createContext, Suspense, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Spinner from "./Components/Spinner";
import DeleteUser from "./Components/DeleteUser";
const Login = React.lazy(() => import("./Components/Login"));
const SignUp = React.lazy(() => import("./Components/SignUp"));
const HomePage = React.lazy(() => import("./Components/HomePage"));
const Publish = React.lazy(() => import("./Components/Publish"));
const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const MoreDetails = React.lazy(() => import("./Components/MoreDetails"));
const Cart = React.lazy(() => import("./Components/Cart"));
const PrivateAccess = React.lazy(() => import("./Components/PrivateAccess"));
const Empower = React.lazy(() => import("./Components/Empower"));
const SearchedData = React.lazy(() => import("./Components/SearchedData"));
const Categories = React.lazy(() => import("./Components/Categories"));
const MyAccount = React.lazy(() => import("./Components/MyAccount"));
const Success = React.lazy(() => import("./Components/Payments/Success"));
const Cancel = React.lazy(() => import("./Components/Payments/Cancel"));
const ScrollToTop = React.lazy(() => import("./Components/ScrollToTop"));
const ForgotPassword = React.lazy(() =>
  import("./Components/subcomponent/2.Login/ForgotPassword")
);
const EmailVerify = React.lazy(() =>
  import("./Components/subcomponent/2.Login/EmailVerify")
);
const ChangePassword = React.lazy(() =>
  import("./Components/subcomponent/2.Login/ChangePassword")
);
export const ShowPopContext = createContext();

const App = () => {
  return (
    <Suspense fallback={<Spinner />}>
      <Router>
        <ScrollToTop />

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

          <Route
            path="/deleteuser/:id"
            element={
              <PrivateAccess>
                <DeleteUser />
              </PrivateAccess>
            }
          ></Route>

          <Route path="/user/dashboard/more" element={<MoreDetails />}></Route>

          <Route path="/empowering/:id" element={<Empower />}></Route>

          <Route path="/search/:id?" element={<SearchedData />}></Route>

          <Route path="/category/:id" element={<Categories />}></Route>

          <Route path="/success/:id?" element={<Success />}></Route>

          <Route path="/cancel" element={<Cancel />}></Route>

          <Route path="/forgotpassword" element={<ForgotPassword />}></Route>

          <Route path="/emailverify/:id" element={<EmailVerify />}></Route>

          <Route path="/changepassword" element={<ChangePassword />}></Route>
        </Routes>
      </Router>
    </Suspense>
  );
};

export default App;
