'use client'
import { login, register } from "@/app/lib/action";
import styles from "./loginForm.module.css";
import { useFormState } from "react-hook-form";
import { useRouter } from "next/navigation";
import Link from "next/link";

const loginForm = () => {

const [state,formAction] = useFormState(login,undefined);

const router = useRouter();

// useEffect(()=>{
//     state?.success && router.push('/login')
// },[state?.success,router]);

  return (
  
         <form className={styles.form} action={formAction}>
        <input type="text" placeholder='username' name='username' required/>
        <input type="password" placeholder='password' name='password' required/>
       
        <button>Login</button>
        {state?.error}
        <Link href='/register'>
        Don't have account?<b> Register</b>
        </Link>
      </form>

  )
}

export default loginForm