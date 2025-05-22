import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function App() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light p-4">
        <Login /> 
      </div>
    </>
  );
}

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleLogin = async () => {
    setMessage({ type: "", text: "" });
    setLoading(true);

    try {
      const res = await axios.post("https://zerodha-b0oq.onrender.com/login", { 
        username: username,
        password: password,
      });

      if (res.data.success) {
        setMessage({ type: "success", text: res.data.message || "Login successful! Redirecting to dashboard..." });
        window.location.href = "https://zerodha-1-e2f2.onrender.com/dashboard"; 
      } else {
        setMessage({ type: "danger", text: res.data.message || "Login failed. Please check your credentials." });
      }
    } catch (err) {
      console.error("Login error:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setMessage({ type: "danger", text: err.response.data.message });
      } else {
        setMessage({ type: "danger", text: "Login Failed! Please check your connection or try again later." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-lg p-4 p-md-5 rounded-3" style={{ maxWidth: "450px", width: "100%" }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4 text-primary">Login</h2>

        <form>
          {message.text && (
            <div className={`alert alert-${message.type} mt-3`} role="alert">
              {message.text}
            </div>
          )}

          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              autoComplete="off"
              name="username"
              id="username"
              className="form-control"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              autoComplete="off"
              name="password"
              id="password"
              className="form-control"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100 py-2 mt-3"
            disabled={loading}
            onClick={handleLogin}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="ms-2">Loading...</span>
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted">
            Don't have an account?{" "}
            <Link to="/signup" className="text-decoration-none"> 
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
