import React, { useRef, useState } from "react";
import "./App.css";

function App() {
const usernameRef = useRef();
const passwordRef = useRef();

const [data, setData] = useState(null);

const handleSubmit = (e) => {
e.preventDefault();

setData({
  username: usernameRef.current.value,
  password: passwordRef.current.value
});

};

return (
<div className="container">
<h1>Login Form</h1>

  <form onSubmit={handleSubmit}>
    <label>Username:</label>
    <input
      type="text"
      ref={usernameRef}
      placeholder="Enter username"
      required
    />

    <label>Password:</label>
    <input
      type="password"
      ref={passwordRef}
      placeholder="Enter password"
      required
    />

    <button type="submit">Submit</button>
  </form>

  {data && (
    <div className="result">
      <h2>Submitted Information</h2>
      <p>Username: {data.username}</p>
      <p>Password: {data.password}</p>
    </div>
  )}
</div>

);
}

export default App;