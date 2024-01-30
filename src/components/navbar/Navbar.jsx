import React from 'react'
import Links from '@/components/navbar/links/Links.jsx';
import Link from 'next/link';
import styles from './navbar.module.css'
import { auth } from '@/app/lib/auth';
import { User } from '@/app/lib/models';
import { getUser } from '@/app/lib/data';

const Navbar = async() => {
  const session = await auth();

  //const user = await getUser(userId)
  console.log(session)
  //console.log(User,"user")
  return (
      <div className={styles.container}>
        <Link href='/' className={styles.logo}>
        {/* {session?.user?.email} */}
        {session?.user?.username  ? `Hi ${session.user.username}`
        : session?.user?.email? `Hi ${session.user.email.replace(/@.*$/, '')}`
        : "Welcome"}
        </Link>
        <div><Links session={session}/></div>
      </div>
    
  )
}
export default Navbar;