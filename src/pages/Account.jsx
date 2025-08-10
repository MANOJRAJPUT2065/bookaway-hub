import { Helmet } from "react-helmet-async";

const Account = () => {
  // Dummy user data for demonstration
  const user = { email: "user@example.com" };

  // Simple signOut simulation
  const signOut = () => {
    alert("Signed out");
    // You can add navigation or state reset here if needed
  };

  return (
    <main style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Helmet>
        <title>Account — BookAway Hub</title>
        <meta name="description" content="Manage your BookAway Hub account" />
        <link rel="canonical" href="/account" />
      </Helmet>
      <h1>Account</h1>
      <div style={{ border: "1px solid #ccc", borderRadius: 8, padding: 20, backgroundColor: "#f9f9f9" }}>
        <p style={{ color: "#666", marginBottom: 4 }}>Email</p>
        <p style={{ fontWeight: "bold" }}>{user.email}</p>
        <div style={{ marginTop: 20 }}>
          <button
            onClick={signOut}
            style={{
              padding: "10px 20px",
              border: "1px solid #333",
              backgroundColor: "transparent",
              cursor: "pointer",
              borderRadius: 4,
            }}
          >
            Sign out
          </button>
        </div>
      </div>
    </main>
  );
};

export default Account;
