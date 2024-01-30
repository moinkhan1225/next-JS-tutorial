import React from 'react'
import { addPost, delPost } from '../lib/action'

const page = () => {
  return (
    <div>
        <form action={addPost}>
           <input type="text" placeholder='userId' name='userId'/> 
           <input type="text" placeholder='title' name='title'/> 
           <input type="text" placeholder='desc' name='desc'/> 
           <input type="text" placeholder='slug' name='slug'/>
           <input type="date" placeholder='date' name='date'/>
           <button>Save Post</button> 
        </form>
        <form action={delPost}>
           <input type="text" placeholder='Post Id' name='id'/> 
           <button>Delete Post</button> 
        </form>
    </div>
  )
}

export default page