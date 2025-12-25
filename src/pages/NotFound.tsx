import { Link } from "react-router-dom";
import AnimateOnView from "@/components/ui/AnimateOnView";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-quantum flex items-center justify-center pt-28">
      <AnimateOnView animationType="fade" delay={0.1}>
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold text-cyber mb-4">404</h1>
          <h2 className="text-3xl font-poppins font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-mist mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-gradient-accent text-white font-semibold rounded-lg hover:scale-105 transition-transform duration-300"
          >
            Go Back Home
          </Link>
        </div>
      </AnimateOnView>
    </div>
  );
}
