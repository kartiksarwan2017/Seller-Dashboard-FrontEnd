import React, {useState} from 'react';
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';
import "./CreateSubCategory.scss";

const CreateSubCategory = () => {

  const {sellerId, categoryId} = useParams();
  const [subCategoryName, setSubCategoryName] = useState("");

  const addNewSubCategory = async () => {

    try {
     const subCategoryDetails = {
       "subCategoryName": subCategoryName,
   }

   const response = await axios.post(`https://seller-dashboard-backend.onrender.com/api/seller/store/add-sub-category/${sellerId}/${categoryId}`, subCategoryDetails);

   Swal.fire({
     title: `<strong>${response.data.message}</strong>`,
     icon: 'success',
     showCloseButton: true
     });


     setTimeout(() => {
      localStorage.setItem("subCategoryId", response.data.subCategoryAdded._id);
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
     <div className='subcategory-container'>
      
     <div className="heading">
        <h1>Create Sub Category</h1>
      </div>

     <Container style={{padding: "7%"}}>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group className="mb-3">
              <Form.Label>Sub Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Sub Category" value={subCategoryName} onChange={(e) => setSubCategoryName(e.target.value)} />
          </Form.Group>

            <Button variant="primary" type="submit" onClick={addNewSubCategory}>
              Create Sub Category
            </Button>
          </Form>
        </Container>
     </div>
    </>
  )
}

export default CreateSubCategory;