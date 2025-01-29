import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
import { RiSearchLine } from 'react-icons/ri'
const Item = ({products}) => {
  return (
    <div className='items col'>
              <div className="items__contener ">
                          
                            <Link to={`/product/${products.id}`}><img src={products.image} /></Link>
                            
                            <span className='scaner'><RiSearchLine/></span>
                            <p className="product__title">{products.title}</p>
                           <p className="product__color"> {products.color}</p>
                            <p className="product__category">{products.category}</p>
                            <div className='price_contener'>
                            <p className="product__prevPrice">{products.prevPrice}</p>
                            <p className="product__newPrice">{products.newPrice}</p>
                            </div>
              </div>

    </div>
  )
}

export default Item