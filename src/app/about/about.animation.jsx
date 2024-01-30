"use client"
import dynamic from "next/dynamic";
import React from 'react';
import styles from './about.module.css';


export const metadata = {
  title:"About Page",
  decription:"About discription",
};

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
const aboutAnimation=()=>{
    return(

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
    );
}
export default aboutAnimation;