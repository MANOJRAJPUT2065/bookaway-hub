import { Helmet } from "react-helmet-async";
import { useAuth } from "@/auth/AuthProvider";
import { Button } from "@/components/ui/button";

const Account = () => {
  const { user, signOut } = useAuth();

  return (
    <main className="container mx-auto px-6 py-10 max-w-2xl">
      <Helmet>
        <title>Account — BookAway Hub</title>
        <meta name="description" content="Manage your BookAway Hub account" />
        <link rel="canonical" href="/account" />
      </Helmet>
      <h1 className="text-2xl font-semibold mb-4">Account</h1>
      <div className="rounded-lg border border-border p-6 bg-card">
        <p className="text-sm text-muted-foreground mb-2">Email</p>
        <p className="font-medium">{user?.email}</p>
        <div className="mt-6">
          <Button variant="outline" onClick={signOut}>Sign out</Button>
        </div>
      </div>
    </main>
  );
};

export default Account;
