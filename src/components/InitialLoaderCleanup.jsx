
import { useEffect } from "react";

function InitialLoaderCleanup() {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById("initial-loader")?.remove();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return null;
}

export default InitialLoaderCleanup;
