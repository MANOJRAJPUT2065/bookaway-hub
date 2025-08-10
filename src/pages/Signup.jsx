import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signUp({ email, password });
    setLoading(false);
    if (error) {
      toast({ title: "Sign up failed", description: error.message });
      return;
    }
    toast({ title: "Check your inbox", description: "Confirm your email to complete sign up" });
    navigate("/login");
  };

  return (
    <main className="container mx-auto px-6 py-10 max-w-md">
      <Helmet>
        <title>Sign up — BookAway Hub</title>
        <meta name="description" content="Create your BookAway Hub account" />
        <link rel="canonical" href="/signup" />
      </Helmet>
      <h1 className="text-2xl font-semibold mb-6">Create account</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1 text-muted-foreground">Email</label>
          <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
        </div>
        <div>
          <label className="block text-sm mb-1 text-muted-foreground">Password</label>
          <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        </div>
        <Button type="submit" variant="hero" className="w-full" disabled={loading}>{loading?"Signing up...":"Sign up"}</Button>
      </form>
      <p className="text-sm text-muted-foreground mt-4">Have an account? <Link to="/login" className="underline text-primary">Log in</Link></p>
    </main>
  );
};

export default Signup;
