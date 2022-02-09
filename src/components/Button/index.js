import './style.css';

export default function Button({ variant, children, onClick }) {
    return (
      <button
        onClick={onClick}
        className={variant === "text" ? "text_btn" : "btn"}
      >
        {children}
      </button>
    );
  }
