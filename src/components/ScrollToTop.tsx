import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Set scroll position to top immediately without any animation
    document.documentElement.style.scrollBehavior = 'auto';
    document.body.style.scrollBehavior = 'auto';
    
    // Force scroll to top using multiple methods
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    // Restore smooth scroll behavior immediately
    document.documentElement.style.scrollBehavior = '';
    document.body.style.scrollBehavior = '';
  }, [pathname]);

  return null;
};

export default ScrollToTop;
