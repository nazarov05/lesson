import React, { useState } from 'react';
import c from './Banner.module.css';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useRef } from 'react';
import { useEffect } from 'react';

const Banner = () => {
  const [imageCount, setImageCount] = useState(0);
  const imageCon = useRef();
  const images = [
    // "https://www.woot.com/images/disappointment.png",
    'https://images.foxtv.com/static.fox13news.com/www.fox13news.com/content/uploads/2023/08/932/524/2516f4c8-wtvt-00001.jpg?ve=1&tl=1',
    "https://d3gqasl9vmjfd8.cloudfront.net/902e8b37-87cd-46c0-bc19-32cc026e3e40.gif",
    "https://d3gqasl9vmjfd8.cloudfront.net/d22059b9-af58-466c-9208-649d15be1a34.gif",
    
    "https://d3gqasl9vmjfd8.cloudfront.net/b7aba11d-414f-4c2e-9b12-def46f7998af.jpg",
    "https://d3gqasl9vmjfd8.cloudfront.net/b7aba11d-414f-4c2e-9b12-def46f7998af.jpg"
  ]

  useEffect(() => {
    imageCon.current.scrollLeft = imageCount * imageCon.current.offsetWidth
  }, [imageCount])

  useEffect(() => {
   setTimeout(() => {
        if(imageCount < images.length){
          setImageCount(imageCount => imageCount + 1)
        }
        else{
          setImageCount(0)
        }
      }, 6000)
  }, [imageCount, images.length])


  console.log(imageCount)
  return (
   
      <div className={c.banner}>
      <button className={c.left_btn} onClick={() => {
       if (imageCount === 0) {
        setImageCount(images.length - 1)
        }
        else {
            setImageCount(imageCount => imageCount - 1)
        }

      }}><FiChevronLeft/></button>
      <div ref={imageCon} className={c.image__coontainer}>
      {
        images.map(item => 
          <img src={item} alt=""/>  
        )
      }
     
      </div>
      <button className={c.right_btn} onClick={() => {
        if (imageCount === images.length - 1) {
          setImageCount(0)
          
      }
      else {
          setImageCount(imageCount => imageCount + 1)
      }        
      }}><FiChevronRight/></button>
       <div className={c.dots}>
      {
        images.map((dot, index) => 
          <div onClick={() => setImageCount(index)} style={index === imageCount ? {background: "dodgerblue", transform: "scale(1.3)"} : null} className={c.point}></div>  
        )
      }
      </div>

      
    </div>

  )
}

export default Banner