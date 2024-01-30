"use client"
import React from 'react'
import styles from './adminPostForm.module.css'
import { addPost } from '@/app/lib/action'
import { useFormState } from 'react-dom'

const AdminPostForm=({userId})=> {
    const[state,formAction]= useFormState(addPost,undefined)
  return (
    <form action={formAction} className={styles.container}>
        <h1>Add new Post</h1>
        <input type='hidden' name='userId' value={userId}/>
        <input type='text' name='title' placeholder='Title'/>
        <input type='text' name='slug' placeholder='Slug'/>
        <input type='text' name='img' placeholder='image'/>
        <textarea type='text' name='desc' placeholder='Desc' rows={10}/>
        <button>Add</button>
        {state && state.error}
    </form>
  )
}

export default AdminPostForm