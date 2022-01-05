import styles from "./styles.css";

export const links = () => [{ rel: "stylesheet", href: styles }];

type ButtonProps = {
  className: string;
  labelText: string;
};

export default function Button({
  className,
  labelText,
  ...props
}: ButtonProps) {
  return (
    <button {...props} data-button className={`mb-32 ${className}`}>
      {labelText}
    </button>
  );
}
