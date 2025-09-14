// src/components/Headertxt.tsx

import React from "react";

interface HeadertxtProps {
  title: string;
  txtsize?: number;
  status?: boolean;
}

const Headertxt: React.FC<HeadertxtProps> = ({ title, txtsize = 24, status = false }) => {
  return (
    <h1
      style={{
        color: status ? "green" : "red",
        fontSize: `${txtsize}px`,
      }}
    >
      {title}
    </h1>
  );
};

export default Headertxt;