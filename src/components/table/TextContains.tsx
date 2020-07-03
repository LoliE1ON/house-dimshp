import React from "react";
import { useDispatch } from "react-redux";
import { ChangeInputArgs, TextContainsProps } from "./types";
import { updateTableColumnFilters } from "../../store/Table/actions";

export const TextContains = ({ item, table }: TextContainsProps) => {
  const dispatch = useDispatch();

  // Update text contains filter
  const onChangeInput = ({ currentTarget, name }: ChangeInputArgs) => {
    const filters = table.columns.map(column => {
      if (column.name === name) {
        return {
          ...column,
          filters: {
            ...column.filters,
            textContains: {
              contains: currentTarget.value,
            },
          },
        };
      } else return column;
    });

    dispatch(
      updateTableColumnFilters({
        type: table.type,
        filters,
      })
    );
  };

  return (
    <>
      <input
        className="form-input input-sm"
        type="text"
        placeholder="Search"
        onChange={({ currentTarget }) =>
          onChangeInput({ currentTarget, name: item.name })
        }
      />
    </>
  );
};
