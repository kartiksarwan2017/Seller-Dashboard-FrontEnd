import React, {useState, useEffect} from 'react';
import "./Dropdown.scss";
import {IoMdArrowDropdown} from "react-icons/io";
import {BiUserPin} from "react-icons/bi";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import InventoryList from '../InventoryList/InventoryList';

const Dropdown = ({items, title }) => { 

  const [isOpen, setIsOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 
  const {sellerId} = useParams();
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [subCategoryId, setSubCategoryId] = useState("");
  const [categorySelected, setCategorySelected] = useState("");
  const [subCategorySelected, setSubCategorySelected] = useState("");
  const [inventoryList, setInventoryList] = useState([]);

  useEffect(() => {
      
      const getSpecificSeller = async () => {
          const {data: {
              sellerDetails: {
                  category, subCategory
              }
          }} = await axios.get(`https://seller-dashboard-backend.onrender.com/api/seller/${sellerId}`);

          console.log(category, subCategory)

          setCategory(category);
          setSubCategory(subCategory);

      } 

      const getInventoryList = async () => {
        if(subCategoryId !== ""){
        const response = await axios.get(`https://seller-dashboard-backend.onrender.com/api/seller/store/all-inventories/${subCategoryId}`);
        setInventoryList(response.data.inventoryList);
        }
    }

      getInventoryList();
      getSpecificSeller();
  }, [subCategoryId]);

  const handleItemClick = (item) => { 
   if(item.categoryName){
    setSelectedItem(item.categoryName); 
    setCategorySelected(item.categoryName);
    setIsOpen(false); 
   }else{
    setSelectedItem(item.subCategoryName); 
    setSubCategorySelected(item.subCategoryName);
    localStorage.setItem("selectedSubcategory", item._id);
    setSubCategoryId(localStorage.getItem("selectedSubcategory"));
    setIsOpen(false); 
   }
  }; 

  return ( 
    <div className="dropdown"> 

    <h1>Select {title}</h1>

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


      <InventoryList inventory={inventoryList} />

    </div> 
  ); 
}; 

export default Dropdown;