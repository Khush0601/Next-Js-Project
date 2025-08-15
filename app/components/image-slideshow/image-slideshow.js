"use client"
import React, { useState, useEffect } from "react";
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import food from "../../assets/logo.jpg";
import styles from "./image_slideshow.module.css"
import Image from "next/image";

export default function ImageSlideshow() {
  const images = [burger, pizza, food];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.slideshow}>
    <div className={styles.imageWrapper}>
      <Image
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className={styles.slideImage}
        priority
        fill
      />
    </div>
    <div className={styles.dots}>
      {images.map((_, index) => (
        <span
          key={index}
          className={`${styles.dot} ${
            index === currentImageIndex ? styles.active : ""
          }`}
          onClick={() => setCurrentImageIndex(index)}
        ></span>
      ))}
    </div>
  </div>
  );
}
