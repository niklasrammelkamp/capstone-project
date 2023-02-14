import { StyledFilter } from "./StyledFilter";
import Button from "../Button";

export default function Filter({ filter, activeFilters, onFilterClick }) {
  return (
    <StyledFilter>
      {filter.map((filter) => {
        return (
          <Button
            variant="filter"
            isActive={activeFilters.includes(filter)}
            type="button"
            key={filter}
            onClick={() => {
              onFilterClick(filter);
            }}
          >
            {filter}
          </Button>
        );
      })}
    </StyledFilter>
  );
}
