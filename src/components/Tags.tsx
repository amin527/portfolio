interface TagsProps {
  items: string[];
  label: string;
}

export function Tags({ items, label }: TagsProps) {
  return (
    <ul className="tags" aria-label={label}>
      {items.map((item) => (
        <li key={item} className="tag">
          {item}
        </li>
      ))}
    </ul>
  );
}
