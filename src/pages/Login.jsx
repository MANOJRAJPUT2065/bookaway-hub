import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      if (!email.includes("@") || password.length < 6) {
        alert("Login failed: Invalid email or password too short");
        return;
      }

      alert("Welcome back! Logged in successfully.");
      navigate("/account");
    }, 1500);
  };

  return (
    <main style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <Helmet>
        <title>Log in — BookAway Hub</title>
        <meta name="description" content="Access your BookAway Hub account" />
        <link rel="canonical" href="/login" />
      </Helmet>
      <h1>Log in</h1>
      <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
          />
        </label>
        <button type="submit" disabled={loading} style={{ padding: 10 }}>
          {loading ? "Logging in..." : "Log in"}
        </button>
      </form>
      <p style={{ marginTop: 16 }}>
        No account? <Link to="/signup">Sign up</Link>
      </p>
    </main>
  );
};

export default Login;
