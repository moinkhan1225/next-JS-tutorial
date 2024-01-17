import Link from 'next/link'
import React from 'react'

const Links = () => {
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
  return (
    <div>
    {links.map((link)=><Link href={link.path} key={link.title}>{link.title}</Link>)}
    </div>
  )
}

export default Links