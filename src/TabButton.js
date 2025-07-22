export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <div>
      <li>
        <button
          className={isSelected ? "active" : undefined}
          onClick={onSelect}
        >
          {children}
        </button>
      </li>
    </div>
  );
}
