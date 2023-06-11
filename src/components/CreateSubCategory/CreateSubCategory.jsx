import React, {useState, useEffect} from 'react';
import  Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import axios from "axios";
import Swal from 'sweetalert2';

const CreateSubCategory = () => {

  const {sellerId, categoryId} = useParams();
  console.log(sellerId, " ", sellerId);
  console.log(categoryId , " ", categoryId);

  const [subCategoryName, setSubCategoryName] = useState("");

  const addNewSubCategory = async () => {

    try {
     const subCategoryDetails = {
       "subCategoryName": subCategoryName,
   }

   const response = await axios.post(`https://divisha-tech-backend.onrender.com/api/seller/store/add-sub-category/${sellerId}/${categoryId}`, subCategoryDetails);
   console.log(response);
   console.log(response.data.subCategoryAdded._id);

   Swal.fire({
     title: `<strong>${response.data.message}</strong>`,
     icon: 'success',
     showCloseButton: true
     });


     setTimeout(() => {
      localStorage.setItem("subCategoryId", response.data.subCategoryAdded._id);
      window.location = "/";	
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
     <div>
     <Container style={{padding: "7%"}}>
          <Form onSubmit={(e) => e.preventDefault()}>

          <Form.Group className="mb-3">
              <Form.Label>Sub Category Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Sub Category" value={subCategoryName} onChange={(e) => setSubCategoryName(e.target.value)} />
          </Form.Group>

            <Button variant="primary" type="submit" onClick={addNewSubCategory}>
              Create Category
            </Button>
          </Form>
        </Container>
     </div>
    </>
  )
}

export default CreateSubCategory;