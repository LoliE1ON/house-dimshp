import React from "react";
import { FilterButtonProps } from "./types";

export const FilterButton = ({ column }: FilterButtonProps) => {
  const total = column.filters.multiSelect.items.length;

  return (
    <>
      <i
        className={
          total
            ? "form-icon icon fas fa-filter activeTotalFilter"
            : "form-icon icon fas fa-filter"
        }
        data-count={total}
      />
    </>
  );
};
