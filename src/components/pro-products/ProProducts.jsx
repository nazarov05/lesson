import React, { useEffect, useState } from 'react'
import './ProProduct.css'
import {db} from '../../server/firebase'
import { addPro } from '../../redux/action/action';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';




function ProProduct() {

    const dispatch = useDispatch()

    const [proProduct, setProProduct] = useState([]);

    useEffect(() => {
        db.collection('Alibaba_All_Products').onSnapshot((products) => setProProduct(products.docs.map((pro) => ({
            id: pro.id,
            pro: pro.data()
        }))));
    }, [])
    // console.log("All products>>> ",proProduct);

   
    return (
        <div className="pro_product">

            {
                proProduct?.map((pro, inx) => (

                    <div key={inx} className="pro_product_box">
                        <Link to={`/products/${pro.id}`}>

                          <img className='img__pro__pro' src={pro.pro.url} alt="" />
                        </Link>

                      <div className="textts_container">
                      <div className="emty_space"></div>
                    
                      <div key={pro.id} className="pro_product_text">
                        {/* <h4>{pro.id}</h4> */}
                            <h4 className="pro_text_1">{pro.pro.title}</h4>
                            <h4 className="pro_price">{pro.pro.price}$</h4>
                            <button className='btn2'
                            //    onClick={()=> dispatch( addPro("pro"))}     
                               onClick={() => {dispatch({type: "ADD_Product", payload: pro})}}     
                                >Add to card</button>
                        </div>
                      </div>

                    </div>

                ))
            }



                
        </div>
    )
}

export default ProProduct