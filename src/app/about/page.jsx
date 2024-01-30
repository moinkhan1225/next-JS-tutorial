import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';
import AboutAnimation from './about.animation';

const about = () => {
  return (
   
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subtitle}>About Agency</h2>
          <h1 className={styles.title}>
            we create digital ideas that are bigger, bolder, braver and better.
          </h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Velit voluptates reprehenderit facere itaque quis! Repellat,
            cupiditate, nobis dolorum dolorem dolor dolore aperiam velit
          </p>
          <AboutAnimation/>
        
          {/* <div className={styles.boxes}>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
            <div className={styles.box}>
              <h1>10 K+</h1>
              <p>Year of experience</p>
            </div>
          </div> */}
        </div>
        <div className={styles.imgContainer}>
        <Image 
        src="/about.png" 
        alt="about-image"
        fill
        className={styles.img}
        />
        </div>
      </div>

  )
}

export default about