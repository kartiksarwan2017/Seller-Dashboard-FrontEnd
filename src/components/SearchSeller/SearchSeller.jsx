import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Dropdown from "../Dropdown/Dropdown";
import "./SearchSeller.scss";


const SearchSeller = () => {

    const {sellerId} = useParams();
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    useEffect(() => {
        
        const getSpecificSeller = async () => {
            const {data: {
                sellerDetails: {
                    category, subCategory
                }
            }} = await axios.get(`https://seller-dashboard-backend.onrender.com/api/seller/${sellerId}`);

            setCategory(category);
            setSubCategory(subCategory);

        } 
    
        getSpecificSeller();
    }, []);

  return (
    <>
     <div className='search-seller-container'> 

     <Dropdown  items={category} title="Category"  />
     <Dropdown  items={subCategory} title="SubCategory"  />
      
     </div>
    </>
  )
}

export default SearchSeller;