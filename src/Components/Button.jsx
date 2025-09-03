export default function Button({ text, className = "", onClick }) {
  return (
    <button onClick={onClick} className={`${className}`}>
      {text}
    </button>
  );
}
