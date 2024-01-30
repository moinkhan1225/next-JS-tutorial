import React from 'react'
import {getPosts} from '@/app/lib/data'
import styles from './adminPosts.module.css';
import Image from 'next/image';
import { delPost } from '@/app/lib/action';

const adminPosts = async() => {
    const posts = await getPosts()

  return (
    <div className={styles.container}>
        <h1>Posts</h1>
        {posts.map(post=>(
          <div className={styles.post} key={post.id}>
            <div className={styles.detail}>
                <Image src={post.img || "/noAvatar.png"} alt='' width={50} height={50}/>
                <span>{post.title}</span>
            </div>
            
                <form action={delPost}>
                <input type='hidden' name='id' value={post.id} />

                <button className={styles.postButton}>Delete</button>
            </form>
          </div>  
        ))}
    </div>
  )
}

export default adminPosts