import { lazy} from "react";
import {Routes, Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import './App.css';

const Login = lazy(() => import("./components/Login/Login"));
const SignUp = lazy(() => import("./components/SignUp/SignUp"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const Home = lazy(() => import("./components/Home/Home"));
const CreateStore = lazy(() => import("./components/CreateStore/CreateStore"));
const CreateCategory = lazy(() => import("./components/CreateCategory/CreateCategory"));
const CreateSubCategory = lazy(() => import("./components/CreateSubCategory/CreateSubCategory"));
const CreateInventory = lazy(() => import("./components/CreateInventory/CreateInventory"));
const SearchSeller = lazy(() => import("./components/SearchSeller/SearchSeller"));



function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route exact path={`/createStore/:sellerId`} element={<CreateStore />} />
          <Route exact path={`/createCategory/:sellerId/:storeId`} element={<CreateCategory />} />
          <Route exact path={`/createSubCategory/:sellerId/:categoryId`} element={<CreateSubCategory />} />
          <Route exact path={`/createInventory/:categoryId/:subCategoryId`} element={<CreateInventory />} />
          <Route exact path={`/getSpecificSeller/:sellerId`} element={<SearchSeller />} />
          
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
