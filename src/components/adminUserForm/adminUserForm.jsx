"use client"
import React from 'react'
import styles from './adminUserForm.module.css'
import { addUser } from '@/app/lib/action'
import { useFormState } from 'react-dom'

const adminUserForm=()=> {
    const[state,formAction]= useFormState(addUser,undefined)
  return (
    <form action={formAction} className={styles.container}>
        <h1>Add new User</h1>
        <input type='text' name='username' placeholder='username'/>
        <input type='email' name='email' placeholder='email'/>
        <input type='password' name='password' placeholder='password'/>
        <input type='text' name='img' placeholder='image'/>
        <select name='isAdmin'>
            <option value='false'>Is Admin?</option>
            <option value='false'>No</option>
            <option value='true'>Yes</option>
        </select>
        <button>Add</button>
        {state && state.error}
    </form>
  )
}

export default adminUserForm