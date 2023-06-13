import React, {useState} from 'react';
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';
import "./CreateInventory.scss";


const CreateInventory = () => {

  const {subCategoryId, categoryId} = useParams();
  console.log(subCategoryId, " ", subCategoryId);
  console.log(categoryId , " ", categoryId);

  const [productName, setProductName] = useState("");
  const [mrp, setMrp] = useState("");
  const [sellingPrice, setsellingPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productImage, setProductImage] = useState("");

  const addNewInventory = async () => {

    try {
     const inventoryDetails = {
       "productName": productName,
       "MRP": mrp,
       "SellingPrice": sellingPrice,
       "quantity": quantity,
       "productImage": productImage
   }

   const response = await axios.post(`https://seller-dashboard-backend.onrender.com/api/seller/store/add-inventory/${categoryId}/${subCategoryId}`, inventoryDetails);

   Swal.fire({
     title: `<strong>${response.data.message}</strong>`,
     icon: 'success',
     showCloseButton: true
     });


     setTimeout(() => {
      window.location = "/home";	
   }, 1000); 

 }catch(error){

     Swal.fire({
       title: `<strong>${error.response.data.message}</strong>`,
       icon: 'error',
       showCloseButton: true
     });
   
 }

}


  return (
    <>
    <div className='new-inventory-container'>

    <div className="heading">
        <h1>Create Inventory</h1>
    </div>


    <Container style={{padding: "7%"}}>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group className="mb-3">
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Inventory Name" value={productName} onChange={(e) => setProductName(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3">
              <Form.Label>MRP</Form.Label>
              <Form.Control type="text" placeholder="Enter Inventory Name" value={mrp} onChange={(e) => setMrp(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3">
              <Form.Label>Selling Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Inventory Name" value={sellingPrice} onChange={(e) => setsellingPrice(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <Form.Control type="text" placeholder="Enter Inventory Name" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
          </Form.Group>
          
          <Form.Group className="mb-3">
              <Form.Label>Product Image</Form.Label>
              <Form.Control type="text" placeholder="Enter Inventory Name" value={productImage} onChange={(e) => setProductImage(e.target.value)} />
          </Form.Group>

            <Button variant="primary" type="submit" onClick={addNewInventory}>
              Create Inventory
            </Button>
          </Form>
    </Container>
      
    </div>
    </>
  )
}

export default CreateInventory;