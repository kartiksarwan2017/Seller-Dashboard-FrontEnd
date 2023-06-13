import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./Home.scss";

const Home = () => {

  const [sellerId, setSellerId] = useState("");
  const [storeId, setStoreId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [subCategoryId, setSubCategoryId] = useState("");
  const [authenticated, setauthenticated] = useState(null);

  useEffect(() => {

    if (localStorage.getItem("token") !== null) {
      setauthenticated(true);
      setSellerId(localStorage.getItem("sellerId"));
      setStoreId(localStorage.getItem("storeId"));
      setCategoryId(localStorage.getItem("categoryId"));
      setSubCategoryId(localStorage.getItem("subCategoryId"));

    }
 
  }, [authenticated]);

console.log("subCategoryId", subCategoryId);


if (localStorage.getItem("token") === null) {
  return <Navigate replace to="/login" />;
} else{

  return (
    <>
     <div className='home-container'>
        
        <Button variant="info" className="btn" onClick={() => window.location.href="/createStore/" + sellerId}>Create Store</Button>
        <Button variant="info" className="btn" onClick={() => window.location.href="/createCategory/" + sellerId + "/" + storeId }>Create Category</Button>
        <Button variant="info" className="btn" onClick={() => window.location.href="/createSubCategory/" + sellerId + "/" + categoryId }>Create Sub Category</Button>
        <Button variant="info" className="btn" onClick={() => window.location.href="/createInventory/" + categoryId + "/" + subCategoryId }>Create Inventory</Button> 
        
     </div>
    </>
  )}
}

export default Home;