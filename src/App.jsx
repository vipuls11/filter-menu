import menu from './product/menu'

import './App.css'
import Menu from './category/Menu'
import MenuType from './category/MenuType'
import { useState } from 'react';

function App() {
  const uniqueCategories = [...new Set(menu.map(item => item.category))];


  const [active, setActive] = useState();
  const [selectMenu, setSelectMenu] = useState(menu); // Initially display all items
  console.log(selectMenu, 'MenuSelect');

  // Function to filter menu items based on category
  const filterMenu = (category,index) => {
    if (category === 'all') {
      setSelectMenu(menu); // Show all items
      setActive(index === active ? null : index); // Toggle active state
    } else {
      const filteredItems = menu.filter(item => item.category === category);
      setSelectMenu(filteredItems); // Update state with filtered items
      setActive(index === active ? null : index); // Toggle active state
    }
  };
console.log(menu)
  return (
    <>
<div className='main_container'>
    <MenuType uniqueCategories={uniqueCategories} filterMenu={filterMenu} active={active} Menu={selectMenu} setActive={setActive}/>
    <Menu Menu={selectMenu}/>
</div>
    </>
  )
}

export default App
