import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { fadeIn } from "react-animations";
import Radium, { StyleRoot } from "radium";
import "./App.css";
import Header from "./components/header/header.component";
import Footer from "./components/footer/footer.component";
import Home from "./pages/Home/home.component";
import Modal from "./components/Modal/modal.component";
import Member from "./pages/member/member.component";
import SignUp from "./pages/SignUp/sign-up.component";
import SignIn from "./pages/Sign In/sign-in.component";
import Dashboard from "./pages/Dashboard/dashboard.component";

const styles = {
  fadeIn: {
    animation: "x 7s",
    animationName: Radium.keyframes(fadeIn, "fadeIn"),
  },
};

function App() {
  const [click, setClick] = useState(false);
  const [user, setCurrentUser] = useState({
    name: "Tobi",
    memberId: "",
    phone: "",
    email: "",
  });
  const handleChange = (e) => {
    console.log(e);
    setCurrentUser();
    console.log(user);
  };
  const handleClick = () => {
    setClick(!click);
  };
  return (
    <StyleRoot>
      <div className="App" style={styles.fadeIn}>
        <Header click={click} handleClick={handleClick} />
        <Modal click={click} handleClick={handleClick} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/member"
            element={<Member user={user} handleChange={handleChange} />}
          />
          <Route
            exact
            path="/register"
            element={<SignUp user={user} handleChange={handleChange} />}
          />
          <Route exact path="/login" element={<SignIn />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
        </Routes>
        <Footer />
      </div>
    </StyleRoot>
  );
}

export default App;
