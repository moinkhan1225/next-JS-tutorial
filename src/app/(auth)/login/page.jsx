import { handleGithubLogin } from '@/app/lib/action';
import LoginForm from '@/components/loginForm/loginForm';
import styles from './login.module.css';
const loginPage = () => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
      <form action={handleGithubLogin}>
        <button className={styles.github}>Login with Github</button>
      </form>
      <LoginForm/>
      </div>
    </div>
  )
}

export default loginPage;