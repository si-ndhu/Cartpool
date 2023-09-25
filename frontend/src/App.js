import React, {useEffect,useState} from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./Components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Components/Footer";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://3.138.119.253:3001/CSCI5308_26_DEVINT/";
  const [user, setUser] = useState("");
  const [userType, setUserType] = useState("");
  useEffect(() => {
    const storedUser = window.sessionStorage.getItem("username");
    if (storedUser) {
      setUser(storedUser);
    }
    const storedUserType = window.sessionStorage.getItem("userType");
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, [user, userType]);
  return (
    <>
      <BrowserRouter>
        <NavigationBar user={user} userType={userType}/>
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;