import { useState } from "react";

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
  return (
    <div>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Login:</span>
          <input
            type="email"
            value={login}
            onChange={handleLoginChange}
            placeholder="yourEmail"
            name="login"
            autoFocus
          />
          <label>
            <span>Password:</span>
            <input
              type="password"
              placeholder="your password"
              name="password"
              value={password}
              onChange={handlePasswordChance}
            />
          </label>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginForm;
