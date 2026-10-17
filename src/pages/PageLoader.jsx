
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingScreen from "./LoadingScreen.jsx";

function PageLoader() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let showTimer;
    let finishTimer;
    let maxWaitTimer;
    let imageCleanup = [];

    setIsLoading(false);

    // Show loader only if navigation takes longer than 500ms.
    showTimer = setTimeout(() => {
      if (!cancelled) {
        setIsLoading(true);
      }
    }, 500);

    const finishLoading = () => {
      if (cancelled) return;

      clearTimeout(showTimer);
      clearTimeout(maxWaitTimer);

      finishTimer = setTimeout(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      }, 150);
    };

    const checkImages = async () => {
      // Allow the new route to render first.
      await new Promise((resolve) =>
        requestAnimationFrame(resolve)
      );

      if (cancelled) return;

      const images = Array.from(
        document.querySelectorAll("img[data-loader-critical]")
      );

      // Always stop waiting after 3 seconds.
      maxWaitTimer = setTimeout(() => {
        finishLoading();
      }, 3000);

      await Promise.all(
        images.map((img) => {
          // Cached or already completed images.
          if (img.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            let done = false;

            const cleanup = () => {
              if (done) return;
              done = true;

              img.removeEventListener("load", onFinish);
              img.removeEventListener("error", onFinish);

              resolve();
            };

            const onFinish = () => cleanup();

            img.addEventListener("load", onFinish, {
              once: true,
            });

            img.addEventListener("error", onFinish, {
              once: true,
            });

            imageCleanup.push(cleanup);

            // Handle an image that finished during listener setup.
            if (img.complete) {
              cleanup();
            }
          });
        })
      );

      if (!cancelled) {
        finishLoading();
      }
    };

    checkImages();

    return () => {
      cancelled = true;

      clearTimeout(showTimer);
      clearTimeout(finishTimer);
      clearTimeout(maxWaitTimer);

      imageCleanup.forEach((cleanup) => cleanup());
    };
  }, [location.pathname, location.key]);

  return isLoading ? <LoadingScreen /> : null;
}

export default PageLoader;
