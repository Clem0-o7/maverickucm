const OPTIONS = [
  { id: 'all', label: 'All batches' },
  { id: '10', label: 'Class 10' },
  { id: '12', label: 'Class 12' },
];

export default function CourseFilter({ active, onChange }) {
  return (
    <div className="inline-flex rounded-sm border border-line bg-paper p-1">
      {OPTIONS.map((opt) => (
        <button
          key={opt.id}
          onClick={() => onChange(opt.id)}
          className={`rounded-sm px-4 py-2 text-sm font-semibold uppercase tracking-wide transition-colors ${
            active === opt.id ? 'bg-ink text-paper' : 'text-ink-soft hover:text-ink'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
