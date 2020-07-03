import React, { useMemo } from "react";
import { ChangeCurrentTarget } from "../types";
import { ColumnUniqueItem } from "../../../store/Table/types";
import { useDispatch } from "react-redux";
import { setTableColumnMultiSelect } from "../../../store/Table/actions";
import { FilterButton } from "./FilterButton";
import { MultiSelectProps } from "./types";
import { CustomFilters } from "./CustomFilters";
import { convert } from "../sortFunctions";

export const MultiSelect = ({ item, table }: MultiSelectProps) => {
  const dispatch = useDispatch();

  const onClickMultiSelectColumn = ({ target }: { target: any }) => {
    const parentElement =
      target.tagName === "I" || target.tagName === "SPAN" ? target.parentElement.parentElement : target.parentElement;
    const list = parentElement?.querySelector(".list");

    if (!list) return;

    const activeElement = document.querySelector(".list.visible");
    if (activeElement !== list)
      Array.from(document.querySelectorAll(".list")).forEach(item => item.classList.remove("visible"));

    list.classList.toggle("visible");

    // TODO: Страшно, очень страшно
    const targetRects = target.getClientRects()[0];
    const listRects = list.getClientRects()[0];
    if (!listRects || !targetRects) return;

    let left = targetRects.left - (listRects.width - targetRects.width) / 2;
    let top = targetRects.top + targetRects.height + 10;

    left < 15 && (left = 15);
    left + listRects.width > window.innerWidth && (left = window.innerWidth - listRects.width - 15);

    list.style.top = `${top}px`;
    list.style.left = `${left}px`;
  };

  const setMultiSelectItem = ({ currentTarget }: ChangeCurrentTarget) => {
    let activeSelectItems = [...item.filters.multiSelect.items];

    if (currentTarget.checked) {
      activeSelectItems.push(currentTarget.value);
    } else {
      activeSelectItems = activeSelectItems.filter(selectItem => selectItem !== currentTarget.value);
    }
    dispatch(
      setTableColumnMultiSelect({
        type: table.type,
        column: item.name,
        items: activeSelectItems,
      }),
    );
  };

  // Computed unique rows
  const computedColumn = useMemo(() => {
    // Check if select not empty item
    let activeMultiSelect = false;
    table.columns.forEach(col => {
      if (col.filters.multiSelect.items.length && col.filters.multiSelect.items[0] !== "") {
        activeMultiSelect = true;
      }
    });

    return table.columns
      .filter(column => column.name === item.name)
      .map(column => ({
        ...column,
        uniqueItems: !activeMultiSelect
          ? column.uniqueItems.map(unique => ({ ...unique, title: convert(unique.title, column.type) }))
          : column.uniqueItems
              .map(unique => ({ ...unique, title: convert(unique.title, column.type) }))
              .filter(unique => unique.title !== ""),
        /*
        uniqueItems: Array.from(new Set(table.data.map((row: any) => row[column.name].toString())))
          .map((item: any) => ({
            title: convert(item, column.type),
            total: table.filteredData.filter((itemData: any) => itemData[column.name].toString() === item.toString())
              .length,
          }))
          .sort((a: any, b: any) => a.title.length - b.title.length),
         */
      }))[0];
  }, [table, item.name]);

  return (
    <div className="col-input">
      <div className="header-column c-hand" onClick={onClickMultiSelectColumn}>
        <FilterButton column={computedColumn} />
      </div>

      <div className="list">
        <ul className="menu">
          <CustomFilters table={table} item={item} />
          <div className="divider" />

          {computedColumn.uniqueItems.map((column: ColumnUniqueItem) => (
            <li className="menu-item " key={column.title}>
              <label className="form-checkbox menu-item-hover c-hand">
                <input
                  checked={item.filters.multiSelect.items.includes(column.title)}
                  type="checkbox"
                  value={column.title}
                  onChange={setMultiSelectItem}
                />
                <i className="form-icon" />
                <span
                  className={
                    column.title.length > 0 ? "pr-2 multi-select-item" : "pr-2 text-warning multi-select-item"
                  }>
                  {column.title.length > 0 ? column.title : "Пустые строки"}
                </span>
                <span className="badge badge-small" data-badge={column.total} />
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
