import '../index.css';
export default function TabController({ children, onSelected, isSelected }) {
  // console.log("I AM HERE TOO");
  return (
    <li>
      <button
        className={isSelected ? 'active' : undefined}
        onClick={onSelected}
      >
        {children}
      </button>
    </li>
  );
}
