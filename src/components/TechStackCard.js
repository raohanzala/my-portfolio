export default function TechStackCard({ name, icon: Icon, color }) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-lg border border-slate-200 px-3 py-5">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--accent)]">
        <Icon className={`text-2xl ${color}`} />
      </div>
      <span className="text-center text-sm font-medium text-[var(--subtext)]">{name}</span>
    </div>
  );
}
