import "./styles.css";

export default function Button({ children, link, target, classNames }) {
  return (
    <a target={target} className={`btn ${classNames}`} href={link}>
      {children}
    </a>
  );
}

export function ButtonFull({ children, link, target, classNames }) {
  return (
    <a target={target} className={`btn-full ${classNames}`} href={link}>
      {children}
    </a>
  );
}
