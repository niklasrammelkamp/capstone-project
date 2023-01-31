export default function Filter({ filter, activeFilters, onFilterClick }) {
  return (
    <section>
      {filter.map((filter) => {
        return (
          <button
            key={filter}
            onClick={() => {
              onFilterClick(filter);
            }}
            style={{
              backgroundColor: activeFilters.includes(filter) && "hotpink",
            }}
          >
            {filter}
          </button>
        );
      })}
    </section>
  );
}
