import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center animate-fade-in">
        <div className="animate-pulse mb-8">
          <h1 className="text-9xl font-bold text-primary mb-4 animate-scale-in">404</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full animate-slide-in-right"></div>
        </div>
        <h2 className="text-2xl font-semibold text-foreground mb-4">Page Not Found</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="hover-scale animate-fade-in"
          size="lg"
          variant="default"
        >
          Go Back Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
