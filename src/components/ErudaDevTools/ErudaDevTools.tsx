import eruda from "eruda";
import { useEffect } from "react";

const ErudaDevTools = () => {
  useEffect(() => {
    eruda.init({
      useShadowDom: true,
    });

    eruda.position({ x: 24, y: 24 });

    return () => {
      eruda.destroy();
    };
  }, []);

  return null;
};

export default ErudaDevTools;
