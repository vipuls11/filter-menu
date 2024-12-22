import React from 'react';
import './Menu.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Menu = ({Menu}) => {
    console.log(Menu)
  return (
    <div className='product-list'>
      {
        Menu.map((menulist)=>{
            const {id, title, img, desc,price} = menulist
            return(
                <article key={id} className='product-items'>
                   <LazyLoadImage src={img} alt={title} />

                    <h4>{title}</h4>
                    <p><span>{price}</span></p>
                    <p>{desc}</p>
                </article>
            )
        })
      }  
    </div>
  )
}

export default Menu