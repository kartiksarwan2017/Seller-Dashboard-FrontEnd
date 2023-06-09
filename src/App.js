import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import CreateStore from './components/CreateStore/CreateStore';
import CreateCategory from './components/CreateCategory/CreateCategory';
import './App.css';


function App() {

  const [sellerId, setSellerId] = useState("");

  useEffect(() => {
    setSellerId(localStorage.getItem("sellerId"));
  }, []);

  console.log("seller ID", sellerId);

  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path={`/createStore/:sellerId`} element={<CreateStore />} />
          <Route exact path={`/createCategory/:sellerId/:storeId`} element={<CreateCategory />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
