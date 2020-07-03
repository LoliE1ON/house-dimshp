import React from "react";
import { setTableColumnMultiSelect } from "../../../store/Table/actions";
import { CustomFiltersProps } from "./types";
import { useDispatch } from "react-redux";

export const CustomFilters = ({ item, table }: CustomFiltersProps) => {
  const dispatch = useDispatch();

  const onSelectAllFilters = () => {
    dispatch(
      setTableColumnMultiSelect({
        type: table.type,
        column: item.name,
        items: [...item.uniqueItems.map(unique => unique.title)],
      })
    );
  };

  const onClearAllFilters = () => {
    dispatch(
      setTableColumnMultiSelect({
        type: table.type,
        column: item.name,
        items: [],
      })
    );
  };

  return (
    <div className="columns custom-filters">
      <div className="column col-6">
        <label
          className="menu-item-hover menu-item-block c-hand"
          onClick={onSelectAllFilters}>
          <i className="fas fa-check mr-2" />
          Выбрать все
        </label>
      </div>
      <div className="column col-6">
        <label
          className="menu-item-hover menu-item-block c-hand"
          onClick={onClearAllFilters}>
          <i className="far fa-circle mr-2" />
          Очистить все
        </label>
      </div>
    </div>
  );
};
