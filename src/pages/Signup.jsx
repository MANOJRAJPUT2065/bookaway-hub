import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (!email.includes("@") || password.length < 6) {
        alert("Sign up failed: Invalid email or password too short");
        return;
      }
      alert("Sign up successful! You can now log in.");
      navigate("/login");
    }, 1500);
  };

  return (
    <main style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <Helmet>
        <title>Sign up — BookAway Hub</title>
        <meta name="description" content="Create your BookAway Hub account" />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <h1>Create account</h1>
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
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </form>
      <p style={{ marginTop: 16 }}>
        Have an account? <Link to="/login">Log in</Link>
      </p>
    </main>
  );
};

export default Signup;
