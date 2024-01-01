// src/LoginForm.js
import { TextField } from '@mui/material';
import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement your authentication logic here
    // For simplicity, just check if both username and password are non-empty
    if (username && password) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form style={styles.form}>
        <label style={styles.label}>
          Username:
          <TextField
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />
        </label>
        <label style={styles.label}>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />
        </label>
        <button type="button" onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </form>
      {isLoggedIn && <p>Welcome, {username}!</p>}
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    textAlign: 'center',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
  },
  input: {
    padding: '8px',
    marginBottom: '15px',
  },
  button: {
    backgroundColor: '#4caf50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default LoginForm;
