import React, {useState, useEffect} from 'react';
import "./Dropdown.scss";
import {IoMdArrowDropdown} from "react-icons/io";
import {BiUserPin} from "react-icons/bi";
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Dropdown = ({items, title }) => { 

  const [isOpen, setIsOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const {sellerId} = useParams();
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [categorySelected, setCategorySelected] = useState("");
  const [subCategorySelected, setSubCategorySelected] = useState("");



  useEffect(() => {
      
      const getSpecificSeller = async () => {
          const {data: {
              sellerDetails: {
                  category, subCategory
              }
          }} = await axios.get(`https://seller-dashboard-backend.onrender.com/api/seller/${sellerId}`);

          setCategory(category);
          setSubCategory(subCategory);
          console.log("subCategory.inventory", subCategory.inventory);

      } 
      getSpecificSeller();
  }, []);

  const handleItemClick = (item) => { 
   if(item.categoryName){
    setSelectedItem(item.categoryName); 
    setCategorySelected(item.categoryName);
    setIsOpen(false); 
   }else{
    setSelectedItem(item.subCategoryName); 
    setSubCategorySelected(item.subCategoryName);
    setIsOpen(false); 
   }
  }; 

  return ( 


    <div className="dropdown"> 

    <h1>Select the {title} from dropdown?</h1>

    {selectedItem && ( 
        <p className="dropdown__selectedItem"> 
          <span>{selectedItem}</span>
        </p> 
      )} 
      <button 
        className="dropdown__toggle" 
        onMouseEnter={() => setIsOpen(true)} 

      > 
     Select
     <IoMdArrowDropdown className='dropdown-icon' />
      </button> 
      {isOpen && ( 
        <ul className="dropdown__menu"> 
          {items.map((item, index) => ( 
            <li 
              key={index} 
              className="dropdown__item" 
              onClick={() => handleItemClick(item)} 
            > 
              <BiUserPin style={{marginRight: 20}} /> {item.categoryName  ? item.categoryName : item.subCategoryName } 
            </li> 
          ))} 
        </ul> 
      )} 



    </div> 
  ); 
}; 

export default Dropdown;