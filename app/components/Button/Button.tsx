import React from "react";
import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

export const Button: React.FC<{ className: string }> = ({
  children,
  className,
  ...props
}) => {
  return (
    <button {...props} data-button className={`mb-32 ${className}`}>
      ButtonText
    </button>
  );
};
