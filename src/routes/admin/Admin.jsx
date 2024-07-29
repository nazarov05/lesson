import React, { useState } from 'react';
import './Admin.css';
import { GrFormClose } from 'react-icons/gr';
import { db } from "../../server/firebase"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const Admin = () => {
  const history = useHistory()
  const [product, setProduct] = useState({
    name: "",
    url: "",
    price: ""
})

     const hundleSubmit = ()=>{
      db.collection("mahsulotlar").add(product)
          .then(res => console.log(res))
          .catch(err => console.log(err))
        history.push("/")  
  }

  return (
    <div className='addproduct'>
    
       <div className="admin-box1">
       <Link to="/">
            <GrFormClose className='chiqish'/>
        </Link>
       <div className="admin-img-box">
          <div className="admin-box-img">
          <img src="https://t3.ftcdn.net/jpg/00/65/75/68/360_F_65756860_GUZwzOKNMUU3HldFoIA44qss7ZIrCG8I.jpg" alt="" />
          </div>
         
         
         

      

        </div>
        <h3>Mahsulot Nomi</h3>
        <input className='admin-input1' value={product.name} onChange={e=> setProduct( { ...product, name: e.target.value } )} type="text" placeholder='Name' />
        <h3>Mahsulot Rasmi</h3>
        <input className='admin-input2' value={product.url} onChange={e=> setProduct( { ...product, url: e.target.value } )} type="text" placeholder='Image URL' />
        
        <h3>Mahsulot Narxi</h3>
       <input className='admin-input3' value={product.price} onChange={e=> setProduct( { ...product, price: e.target.value } )} type="text" placeholder='Price' />

       <button className='Add-button' onClick={hundleSubmit}>Yangi Mahsulot qo'shish</button>
       <div className="remove-admin"></div>
       </div>
 
    

    </div>
  )
}

export default Admin