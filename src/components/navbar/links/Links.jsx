"use client";
import React, { useState } from 'react';
import Image from 'next/image'
import styles from './links.module.css'
import NavLink from './navLink/navLink'
import { handleGithubLogOut } from '@/app/lib/action';

const links = [
    {
        title:"HomePage",
        path:"/",
    },
    {
        title:"Contact",
        path:"/contact",
    },
    {
        title:"Blog",
        path:"/blog",
    },
    {
        title:"About",
        path:"/about",
    }];
    const Links = ({session}) => {
    const [open, setOpen] = useState(false)

    //const session = true;
    // const isAdmin = true;

  return (
    <div className={styles.container}>
    <div className={styles.links}>
    {links.map((link)=>
    <NavLink item={link} key={link.title}/>)}
        
        {session?.user ? (
        <>
                {session.user?.isAdmin && <NavLink item={{title:"Admin", path:"/admin"}}/>}
                <form action={handleGithubLogOut}>
                <button className={styles.logout}>Logout</button>
                </form>
                
        </>
        ):(
            <NavLink item={{title: "Login", path:"/login"}}/>
        )}
    </div>

    <Image
    className={styles.menuButton}
    src='/menu.png' alt='' width={30} height={30}
    onClick={()=> setOpen(prev=>!prev)}
    />
    
    {open && (<div className={styles.mobileLinks}>
        {links.map((link)=><NavLink item={link} key={link.title}/>
            )}
    </div>)}
    </div>
  );
};

export default Links