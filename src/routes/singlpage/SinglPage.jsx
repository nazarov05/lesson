
import React, { useEffect, useState } from 'react'
import './SinglPage.css'
import { useDispatch, useSelector } from 'react-redux'
import { db } from '../../server/firebase'

import Navbar from '../../components/navbar/Navbar'

import { FaSearchPlus } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi'
import {BsCart2} from 'react-icons/bs'
import { Link } from 'react-router-dom'




const SinglPage = ({ match }) => {
  const [productdata, setproductData] = useState([]);
  const [malumot, setMalumot] = useState(false)
  const dispatch = useDispatch()
  const cartpro = Object.assign(productdata)
  console.log(cartpro);
  function greet() {
    setMalumot(true)
  }

  setTimeout(greet, 5000);
  console.log(match.params.id);
  useEffect(() => {
    db.collection('mahsulotlar').onSnapshot((products) => setproductData(products.docs.filter(pro => pro.id == match.params.id).map((pro) => ({
      id: pro.id,
      pro: pro.data()
    }))));
  }, [])





  return (
    <>
      <Navbar />
      <div className='product-info'>
        {
          malumot ?
            <div className="product-info-container">
              <div className="product-img">
                <img className='single-img' src={productdata[0].pro.url} alt="" />
                <p className='large-img'><FaSearchPlus /> View larger image</p>
                <img className='small-single-img' src={productdata[0].pro.url} alt="" />
                <img className='small-single-img' src={productdata[0].pro.url} alt="" />
                <img className='small-single-img' src={productdata[0].pro.url} alt="" />
                <p className='single-a'><FiShare /> Share</p>
              </div>
              <div className="product-descr">
                <h4 className="h41">Lightweight slip on jogging shoes women walking casual sneakers</h4>
                <h2 className='h21'>5,401.12/ pair 2 pairs(Min. Order)</h2>
                <div className="flex-name">
                  <p>Product name:</p>
                  <h2>{productdata[0].pro.name}</h2>
                </div>
                <div className="flex-name">
                  <p>Product price:</p>
                  <h2>{productdata[0].pro.price}</h2>
                </div>
               
                <button className='cart-p'  onClick={()=> dispatch({type:"ADD_PRODUCT", payload:productdata})}><BsCart2 style={{marginRight:"10px",}}/>Add To Cart</button>
              </div>

              <div className="quti">
                <div className="quti1">
                <Link to='/'>
                   <button >Woot</button>
                </Link>
               
                
                </div>
             

              </div>
             
            </div>
            :
            <div className="loader-div">
              <h1>Kutilmoqda</h1>
            </div>
        }
      </div>

    </>

  )
}



export default SinglPage