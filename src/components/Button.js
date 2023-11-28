import "../css/Button.css";

function Button({ name, className }) {
  return <button className={className}>{name}</button>;
}

export default Button;