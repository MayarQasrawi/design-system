import type { PropsWithChildren } from "react";
import styles from "./Button.module.css";

type ButtonProps = PropsWithChildren<{
  variant: "primary" | "secondary" | "text";
  color: "blue" | "purple" | "green";
  size: "sm" | "md" | "lg";
  onClick: () => void;
}>;

const Button = ({
  children,
  variant = "primary",
  color = "blue",
  size = "md",
  onClick,
}: ButtonProps) => {
  
  const buttonClass = `${styles.button} ${styles[variant]} ${styles[color]} ${styles[size]}`;

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;