import React from 'react';
import '../App.css';
import './MenuType.css'

const MenuType = ({uniqueCategories,filterMenu, active, Menu, setActive}) => {
  console.log(Menu, 'menu')
    // console.log(uniqueCategories, 'category type' )
    // console.log(active, "active") 
  return (
    <div>
        <h2>Menu List</h2>
        <div className="category-buttons">
          {/* Button to show all categories */}
          <button
                className={`Buttons ${active === 'all' ? 'active' : ''}`} // Add 'active' class if no category is selected
                onClick={() => {filterMenu('all');
                  setActive('all');}
                } // Pass null to reset filter and show all data
            >
                Show All
            </button>
        {uniqueCategories.map((category, index) => (
          <button
            className={`Buttons ${active === index ? 'active' : ''}`} // Add 'active' class if this category is active
            key={index}
            onClick={() => filterMenu(category, index)} // Pass both category and index
          >
            {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitalize category */}
          </button>
        ))}
      </div>   
    </div>
  )
}

export default MenuType