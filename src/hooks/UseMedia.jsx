import { useEffect, useState } from "react";

const UseMedia = (media) => {
  const [match, setMatch] = useState(null);

  useEffect(() => {
    function changematch() {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    }
    changematch();
    window.addEventListener("resize", changematch);
    return () => {
      window.removeEventListener("resize", changematch);
    };
  }, [media]);

  return match;
};

export default UseMedia;
