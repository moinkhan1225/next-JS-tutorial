import React from 'react'
import { addPost, delPost } from '../lib/action'
import { getUsers } from '../lib/data';
import useState from 'react';
const page = async () => {
  let userss = await getUsers();
  const arr = [1,2,3,4,5,6,7,8,9,10,11];
  let mapped =[];
  mapped = userss.map((array)=>array)
  console.log(mapped);
  return (
    <div>
        {/* <form action={addPost}>
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

        </form> */}
        {/* <h1>{map}</h1> */}
       

    </div>
  )
}

export default page