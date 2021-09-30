import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const context = useContext(ThemeContext);
  const mainColor = context.primary.color;
  return <h1 style={{ color: mainColor }}>Box Content</h1>;
};
