import React from 'react'
import styles from './postUser.module.css';
import { getUser } from '@/app/lib/data';
import Image from 'next/image';

//Fetch Data Usinng API
// const getData = async (userId) =>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
//     if(!res.ok){
//         throw new Error("Something went wrong");
//     }
//     return res.json()
// }


const PostUser = async({userId}) => {    
    //const user = await getData(userId);
    const user = await getUser(userId)
  return (
    <div className={styles.container}>
      <Image className={styles.avatar} src={user?.img || '/noavatar.png'}
            alt=''
            width={50}
            height={50}
            />
        <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username || "N/A"}</span>
        </div>
  </div>
  )
}

export default PostUser;