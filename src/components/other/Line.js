import React from "react";
import { useThemeContext } from "../../contexts/ThemeContext";

export default function Line({ props }) {
  const { theme } = useThemeContext();

  return (
    <div
      className="line"
      style={{
        // #e5e5e5
        background: theme == "black" ? "#e5e5e5" : "black",
        width: `${props}`,
      }}
    ></div>
  );
}
