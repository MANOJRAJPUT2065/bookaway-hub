import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/auth/AuthProvider";

const Navbar = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">BookAway Hub</Link>
        <div className="flex items-center gap-3">
          <Link to="/search" className="text-sm text-muted-foreground hover:text-foreground">Search</Link>
          {user ? (
            <>
              <Link to="/bookings" className="text-sm text-muted-foreground hover:text-foreground">My Bookings</Link>
              <Link to="/account" className="text-sm text-muted-foreground hover:text-foreground">Account</Link>
              <Button variant="outline" size="sm" onClick={async () => { await signOut(); navigate("/"); }}>Sign out</Button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Log in</Link>
              <Button asChild size="sm" variant="hero"><Link to="/signup">Sign up</Link></Button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
