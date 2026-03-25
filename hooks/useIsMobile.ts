import { useEffect, useState } from "react";

export const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");

    const handleResize = () => setIsMobile(media.matches);

    handleResize(); // initial check
    media.addEventListener("change", handleResize);

    return () => media.removeEventListener("change", handleResize);
  }, []);

  return isMobile;
};
