import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from "react-router-dom";

import expressAPI from "../services/expressAPI";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the API to log in the user
      const response = await expressAPI.post("/login", { email, password });

      // If the login is successful, store the user's token in local storage and redirect to the home page
      localStorage.setItem("token", response.data.token);
      navigate("/");
    } catch (error) {
      // If the login fails, display an error message
      setErrorMessage("Email ou mot de passe incorrect.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>Connexion</h1>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
        />
      </div>
      <div>
        <label htmlFor="password">Mot de passe</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
        />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <button type="submit">Se connecter</button>
    </form>
  );
}

export default Login;
