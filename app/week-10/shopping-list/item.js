export default function Item({ name, quantity, category, onSelect, onDelete }) {
  return (
    <li className="flex flex-row justify-between p-2 m-4 bg-slate-900 max-w-sm hover:bg-orange-800 cursor-pointer">
      <div onClick={onSelect}>
        <h2 className="text-xl font-bold">{name}</h2>
        <p className="text-sm">
          Buy {quantity} in {category}
        </p>
      </div>
      <button
        onClick={onDelete}
        className="rounded text-white bg-orange-800 cursor-pointer px-4 hover:bg-slate-900 max-w-sm"
      >
        Delete
      </button>
    </li>
  );
}
