import { useEffect, useState } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const resizeScreen = () => setWidth(window.innerWidth);
    document.addEventListener("resize", resizeScreen);
    () => {
      return document.removeEventListener("resize", resizeScreen);
    };
  }, [width]);

  return width;
};
