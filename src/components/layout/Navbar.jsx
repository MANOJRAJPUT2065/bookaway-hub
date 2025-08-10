import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">BookAway Hub</Link>
        <div className="flex items-center gap-3">
          <Link to="/search" className="text-sm text-muted-foreground hover:text-foreground">Search</Link>
          {/* Show login and signup links always */}
          <Link to="/login" className="text-sm text-muted-foreground hover:text-foreground">Log in</Link>
          <Link
            to="/signup"
            className="text-sm text-muted-foreground hover:text-foreground font-semibold px-3 py-1 rounded bg-primary text-white"
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
