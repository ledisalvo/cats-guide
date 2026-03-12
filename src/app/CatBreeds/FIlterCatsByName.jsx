const FilterCatsByName = (props) => {
  return (
    <div className="mb-4 mt-4">
      <input
        type="text"
        className="w-full bg-surface border border-border text-foreground font-body text-sm rounded-xl px-4 py-2.5 placeholder:text-muted outline-none focus:border-amber transition-colors"
        placeholder="Buscar raza o dejar vacío para ver todas"
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};

export default FilterCatsByName;
