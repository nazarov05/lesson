import React, { useEffect, useState } from 'react'
import './Products.css'
import {db} from '../../server/firebase'
import { Link } from 'react-router-dom'
import {BiAlarm} from "react-icons/bi"



function Products() {
    const [proProduct, setProProduct] = useState([]);

    useEffect(() => {
        db.collection('mahsulotlar').onSnapshot((products) => setProProduct(products.docs.map((pro) => ({
            id: pro.id,
            pro: pro.data()
        }))));
    }, [])


   
    return (
        <div className="products">

            {
                proProduct?.map((productdata, inx) => (
                    
                    <div key={inx} className="product">
                    <Link className='link_prod' to={`/products/${productdata.id}`}>

                      
                              <img className='product_img' src={productdata.pro.url} alt="" />
                        

                     <h2 className='product_price'>{productdata.pro.price} </h2>
                        
                    <h3 className="product_name">{productdata.pro.name}</h3>
                   
                    </Link>
                    <span className='ours'> <BiAlarm/> hours lef to by</span>
                    </div>
                   
                ))
            }



                
        </div>
    )
}

export default Products