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

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
