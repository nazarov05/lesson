import React, { useRef } from "react";
import './Scrollby.css'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Scrollby = () => {
  const imageContainer = useRef();
  const goLeft = () => {
    imageContainer.current.scrollBy({
      left: -500,
      behaviour: "smooth"
    })
    
  }

  const goRight = () => {
    imageContainer.current.scrollBy({
      left: 500,
      behavior: 'smooth'
    })
  }
  return (
    <div className='scrollby'>
        <h1 className='scrollby_header'>Best Sellers</h1>
        <span className="texttt">The people have spoken!</span>
        <div ref={imageContainer} className='image_container'>
            <img 
            className='image0'
            
            src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/40715efc-63e3-4a6d-8d6d-b60cc95bab05._AC_SR244,183_.png" alt="" />
            
            <img
            className='image1'
            src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/638074bd-caee-4bbf-9d1b-07b790535327._AC_SR244,183_.png" alt="" />
            
            <img
            className='image1'
            src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/59311f72-968e-4762-a0ae-ed769afd1ebf._AC_SR244,183_.jpg" alt="" />
            <img
            className='image1'
            src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/2db239d6-387c-4f47-b978-e00e5a1bb9ad._AC_SR244,183_.jpg" alt="" />
            <img
            className='image1'
            src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/817dc4f7-dd18-41ea-9527-264a3a68f4ec._AC_SR244,183_.jpg" alt="" />
            <img
            className='image1'
            src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/78be50c2-4f58-44ea-b08d-fa8478541ee0._AC_SR244,183_.jpg" alt="" />
            <img
            className='image1'
            src="https://images-na.ssl-images-amazon.com/images/S/mediaservice.woot.com/0406e4c9-764e-49fa-b043-b206c31dd907._AC_SR244,183_.jpg" alt="" />
            {/* <img
            className='image1'
            src="https://m.media-amazon.com/images/I/81v6X23UlML._AC_SY200_.jpg" alt="" />
            <img
            className='image1'
            src="https://m.media-amazon.com/images/I/81FxtWFGiiL._AC_SY200_.jpg" alt="" />
            <img
            className='image1'
            src="https://m.media-amazon.com/images/I/71slsnNNChL._AC_SY200_.jpg" alt="" /> */}
            {/* <img
            className='image1'
            src="https://m.media-amazon.com/images/I/51o4b5AdNLL._AC_SY200_.jpg" alt="" />
            <img
            className='image1'
            src="https://m.media-amazon.com/images/I/81e4jgomhKL._AC_SY200_.jpg" alt="" /> */}
            {/* <img
            className='image1'
            src="https://m.media-amazon.com/images/I/91HHxxtA1wL._AC_SY200_.jpg" alt="" />
            <img
            className='image1'
            src="https://m.media-amazon.com/images/I/81k1b6u4YvL._AC_SY200_.jpg" alt="" />
            <img
            className='image1'
            src="https://m.media-amazon.com/images/I/81yYivG7NzL._AC_SY200_.jpg" alt="" /> */}
        </div>

        {/* function toRight() {
            
        } */}

        <div className='toleft_chevron_div' onClick={goLeft}> <FiChevronLeft className='toleft_icon'/> </div>
        <div className='toright_chevron_div' onClick={goRight}> <FiChevronRight className='toright_icon'/> </div>
    </div>
  )
}

export default Scrollby