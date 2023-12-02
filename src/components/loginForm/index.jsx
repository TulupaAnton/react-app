import { useState } from "react";
import styles from "./LoginForm.module.css";

const LOGIN_FORM_REG_EXP = {
  login: /^.+@.+$/,
  password: /^(?=.*[A-Z].*)(?=.*[a-z].*) (?=.*\d.*)(?=.*[!#%._].*).{8,16}$/,
};

function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginChange({ target: { value } }) {
    setLogin(value);
  }

  function handlePasswordChance({ target: { value } }) {
    setPassword(value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setLogin("");
    setPassword("");
  }

  const loginClassName = `${styles.formInput}`;

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Login Form</h2>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <label className={styles.formLabel}>
          <span className={styles.labelCaption}>Login:</span>
          <input
            className={styles.formInput}
            type="email"
            value={login}
            onChange={handleLoginChange}
            placeholder="yourEmail"
            name="login"
            autoFocus
          />
          <label className={styles.formLabel}>
            <span className={styles.labelCaption}>Password:</span>
            <input
              className={styles.formInput}
              type="password"
              placeholder="your password"
              name="password"
              value={password}
              onChange={handlePasswordChance}
            />
          </label>
        </label>
        <button className={styles.loginBtn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
