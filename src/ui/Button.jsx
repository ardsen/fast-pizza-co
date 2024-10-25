import { Link } from "react-router-dom";

function Button({ children, disabled, to, type, onClick }) {
  const base =
    "inline-block  text-sm bg-red-500 font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed";

  const styles = {
    primary: base + " px-4 py-3 md:px-6 md:py-4 rounded-xl",
    small: base + " py-2 px-4 md:px-5 md:py-2.5 text-xs rounded-xl",
    secondary:
      "inline-block rounded-xl bg-transparent  text-sm border-2 px-4 py-2.5 md:px-6 md:py-3.5 border-stone-300 text-stone-400 font-semibold uppercase tracking-wider text-stone-800 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:outline-none focus:ring focus:text-stone-800 focus:ring-stone-300 focus:ring-offset-2 disabled:cursor-not-allowed",
    round: base + " px-2.5 py-1 md:px-3.5 md:py-2 text-sm rounded-full",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {" "}
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
