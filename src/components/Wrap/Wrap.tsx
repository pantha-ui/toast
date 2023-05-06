import React from "react";
import useMobile from "../../utils/useMobile";

const Wrap = ({ children }) => {
  const [isMobile] = useMobile(768);

  console.log(isMobile);

  const main = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "row",
  };

  return <div style={{ ...main } as React.CSSProperties}>{children}</div>;
};

export default Wrap;
