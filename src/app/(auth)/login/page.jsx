import { handleGithubLogin } from '@/app/lib/action';
import { handleGoogleLogin } from '@/app/lib/action';
import LoginForm from '@/components/loginForm/loginForm';
import styles from './login.module.css';
import Image from 'next/image';
const loginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
        <div className={styles.socialButtons}>
        <button className={styles.github}>
        <Image
                  src={'/github-logo.png'}
                  alt={'Github Logo'}
                  height={30}
                  width={30}/>
                  Login with Github</button>
        </div>
      </form>
      <form action={handleGoogleLogin}>
      <div className={styles.socialButtons}>
         
          <button className={styles.google}>
                  <Image
                  src={'/google-logo.png'}
                  alt={'Google Logo'}
                  height={30}
                  width={30}/>
                  Login with Google
         </button>
      </div>
        </form>
      <LoginForm/>
      </div>
    </div>
  )
}

export default loginPage;