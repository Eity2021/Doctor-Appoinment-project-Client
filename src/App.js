import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Doctor/Home/Home";
import About from "./Doctor/About/About";
import Appointment from "./Doctor/Appointment/Appointment";
import Reviews from "./Doctor/Reviews/Reviews";
import ContactUs from "./Doctor/ContactUs/ContactUs";
import Login from "./Doctor/Login/Login";
import NotFound from "./Doctor/NotFound/NotFound";
import Header from "./Doctor/Share/Header/Header";
import SignUp from "./Doctor/SignUp/SignUp";
import RequireAuth from "./Doctor/RequireAuth/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Doctor/Dashboard/Dashboard";
import MyAppointment from './Doctor/Dashboard/MyAppointment/MyAppointment';
import MyReviews from './Doctor/Dashboard/MyRivews/MyReviews';
import AllUsers from "./Doctor/AllUsers/AllUsers";


function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
            
          }>
            <Route index element={<MyAppointment />}></Route>
            <Route path="review" element={<MyReviews />}></Route>
            <Route path="AllUsers" element={<AllUsers />}></Route>
            </Route>
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
