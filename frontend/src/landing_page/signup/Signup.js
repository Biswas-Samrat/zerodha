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
        <Signup />
      </div>
    </>
  );
}

const Signup = () => {
 
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleSignup = async () => {
    setMessage({ type: "", text: "" });
    setLoading(true);

    try {

      const res = await axios.post("http://localhost:3002/signup", {
        email: email,
        password: password,
        username: username,
      });

      if (res.data.success) {
        setMessage({ type: "success", text: res.data.message || "Signup successful! Redirecting to dashboard..." });
     
        window.location.href = "http://localhost:3001/dashboard";
      } else {
       
        setMessage({ type: "danger", text: res.data.message || "Signup failed. Please try again." });
      }
    } catch (err) {
      console.error("Signup error:", err);
      if (err.response && err.response.data && err.response.data.message) {

        setMessage({ type: "danger", text: err.response.data.message });
      } else {

        setMessage({ type: "danger", text: "Signup Failed! Please check your connection or try again later." });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card shadow-lg p-4 p-md-5 rounded-3" style={{ maxWidth: "450px", width: "100%" }}>
      <div className="card-body">
        <h2 className="card-title text-center mb-4 text-primary">Sign Up</h2>

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
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              autoComplete="off"
              name="email"
              id="email"
              className="form-control"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            onClick={handleSignup}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                <span className="ms-2">Loading...</span>
              </>
            ) : (
              "Signup"
            )}
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-muted">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
