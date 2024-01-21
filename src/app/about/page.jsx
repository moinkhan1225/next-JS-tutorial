"use client"
import dynamic from "next/dynamic";
import React from 'react';
import Image from 'next/image';
import styles from './about.module.css';

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const achievementsList = [
  {
    metric: "Year of experience",
    value: "10000",
    postfix: "+",
  },
  {
    metric: "NiggaChu",
    value: "1",
    postfix: "+",
  },
  {
    metric: "Pikkachu",
    value: "10",
    postfix: "~",
  },
];

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
          <div className={styles.boxes}>
          {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className={styles.box}
            >
              <h2 className={styles.boxHead}>
                {achievement.prefix}
              
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className={styles.box}
                  transitions={(index) => ({
                    type: "spring",
                    duration: index + 1,
                  })}
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 150,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
                </h2>
                  <p className={styles.box}>{achievement.metric}</p>
              
            </div>
  
          );
        })}
        </div>
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