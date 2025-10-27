import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Get the current URL 'pathname'
  const { pathname } = useLocation();

  // This 'useEffect' hook will run every time the 'pathname' changes
  useEffect(() => {
    // This command scrolls the window to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // The effect depends on the pathname

  return null; // This component doesn't render any visible HTML
};

export default ScrollToTop;