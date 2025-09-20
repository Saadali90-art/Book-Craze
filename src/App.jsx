import React, { Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Spinner from "./Components/Spinner";
import ScrollToTop from "./Components/ScrollToTop";
import PrivateAccess from "./Components/PrivateAccess";
import DeleteUser from "./Components/DeleteUser";
import GoogleUserPassword from "./Components/GoogleUserPassword";

// Lazy-loaded pages (only big pages)
const Login = React.lazy(() => import("./Components/Login"));
const SignUp = React.lazy(() => import("./Components/SignUp"));
const HomePage = React.lazy(() => import("./Components/HomePage"));
const Publish = React.lazy(() => import("./Components/Publish"));
const Dashboard = React.lazy(() => import("./Components/Dashboard"));
const MoreDetails = React.lazy(() => import("./Components/MoreDetails"));
const Cart = React.lazy(() => import("./Components/Cart"));
const Empower = React.lazy(() => import("./Components/Empower"));
const SearchedData = React.lazy(() => import("./Components/SearchedData"));
const Categories = React.lazy(() => import("./Components/Categories"));
const MyAccount = React.lazy(() => import("./Components/MyAccount"));
const Success = React.lazy(() => import("./Components/Payments/Success"));
const Cancel = React.lazy(() => import("./Components/Payments/Cancel"));
const ForgotPassword = React.lazy(() =>
  import("./Components/subcomponent/2.Login/ForgotPassword")
);
const EmailVerify = React.lazy(() =>
  import("./Components/subcomponent/2.Login/EmailVerify")
);
const ChangePassword = React.lazy(() =>
  import("./Components/subcomponent/2.Login/ChangePassword")
);

const App = () => {
  return (
    <Router>
      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Spinner />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense fallback={<Spinner />}>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/signup"
          element={
            <Suspense fallback={<Spinner />}>
              <SignUp />
            </Suspense>
          }
        />

        <Route
          path="/user/dashboard"
          element={
            <PrivateAccess>
              <Suspense fallback={<Spinner />}>
                <Dashboard />
              </Suspense>
            </PrivateAccess>
          }
        />

        <Route
          path="/user/publish"
          element={
            <PrivateAccess>
              <Suspense fallback={<Spinner />}>
                <Publish />
              </Suspense>
            </PrivateAccess>
          }
        />
        <Route
          path="/user/cart"
          element={
            <PrivateAccess>
              <Suspense fallback={<Spinner />}>
                <Cart />
              </Suspense>
            </PrivateAccess>
          }
        />
        <Route
          path="/user/:id"
          element={
            <PrivateAccess>
              <Suspense fallback={<Spinner />}>
                <MyAccount />
              </Suspense>
            </PrivateAccess>
          }
        />
        <Route
          path="/deleteuser/:id"
          element={
            <PrivateAccess>
              <DeleteUser />
            </PrivateAccess>
          }
        />

        <Route
          path="/user/dashboard/more"
          element={
            <Suspense fallback={<Spinner />}>
              <MoreDetails />
            </Suspense>
          }
        />
        <Route
          path="/empowering/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <Empower />
            </Suspense>
          }
        />
        <Route
          path="/search/:id?"
          element={
            <Suspense fallback={<Spinner />}>
              <SearchedData />
            </Suspense>
          }
        />
        <Route
          path="/category/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <Categories />
            </Suspense>
          }
        />
        <Route
          path="/success/:id?"
          element={
            <Suspense fallback={<Spinner />}>
              <Success />
            </Suspense>
          }
        />
        <Route
          path="/cancel"
          element={
            <Suspense fallback={<Spinner />}>
              <Cancel />
            </Suspense>
          }
        />
        <Route
          path="/forgotpassword"
          element={
            <Suspense fallback={<Spinner />}>
              <ForgotPassword />
            </Suspense>
          }
        />
        <Route
          path="/emailverify/:id"
          element={
            <Suspense fallback={<Spinner />}>
              <EmailVerify />
            </Suspense>
          }
        />
        <Route
          path="/changepassword"
          element={
            <Suspense fallback={<Spinner />}>
              <ChangePassword />
            </Suspense>
          }
        />

        <Route path="/googlepassword/:id" element={<GoogleUserPassword />} />
      </Routes>
    </Router>
  );
};

export default App;
