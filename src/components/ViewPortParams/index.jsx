//window.innerHeight, window.innerWidth

import { useEffect, useState } from "react";

function ViewPortParams() {
  const [viewPortSizes, setViewPortStates] = useState({ x: 0, y: 0 });
  const resizeHandler = () => {
    setViewPortStates({ x: window.innerWidth, y: window.innerHeight });
  };

  useEffect(() => {
    resizeHandler();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      <div>Width:{viewPortSizes.x}</div>
      <div>Height:{viewPortSizes.y}</div>
    </>
  );
}

export default ViewPortParams;
