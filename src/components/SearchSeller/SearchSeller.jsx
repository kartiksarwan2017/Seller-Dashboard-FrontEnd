import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SearchSeller = () => {

    const {sellerId} = useParams();
    const [category, setCategory] = useState([]);
    const [subCategory, setSubCategory] = useState([]);

    console.log("subCategory", subCategory);
    console.log("category", category);

    useEffect(() => {
        
        const getSpecificSeller = async () => {
            const {data: {
                sellerDetails: {
                    category, subCategory
                }
            }} = await axios.get(`https://divisha-tech-backend.onrender.com/api/seller/${sellerId}`);

            setCategory(category);
            setSubCategory(subCategory);

            // const response = await axios.get(`https://divisha-tech-backend.onrender.com/api/seller/${sellerId}`);
            // console.log(response);
        } 

        getSpecificSeller();
    }, []);

  return (
    <>
     <div className='search-seller-container'> 
      
     </div>
    </>
  )
}

export default SearchSeller;