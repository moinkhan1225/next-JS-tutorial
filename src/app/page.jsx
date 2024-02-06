import Link from 'next/link';
import styles from './home.module.css';
import Image from 'next/image'
const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, repellendus, consectetur animi maxime.</p>
    <div className={styles.buttons}>
      <Link href='/about' className={styles.button}>
     Learn More
      </Link>
     <Link href='/contact' className={styles.button}> 
     Contact
     </Link>
    </div>
    <div className={styles.brands}>
      <Image src ='/brands.png' alt="" fill className={styles.brandImg}/>
    </div>
    </div>
    <div className={styles.imgContainer}>
      <Image src="/hero.gif" alt="" fill className={styles.heroImg}/>
    </div>
  </div>;
};

export default Home;