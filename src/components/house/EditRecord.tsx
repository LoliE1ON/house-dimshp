import React, { useState } from "react";
import { WrapEditRecordProps } from "../table/types";
import { saveRecordRequest } from "../../api/records";

export const EditRecord = ({ row, saveRow }: WrapEditRecordProps) => {
  const [state, setState] = useState({ ...row });

  const onChangeInputField = (field: string, value: any) => setState((state: any) => ({ ...state, [field]: value }));

  const onSaveRow = () => {
    saveRecordRequest({
      id: state.id,
      row: state,
    }).then(data => saveRow(state.id, state));
  };

  return (
    <div className="table-edit-row">
      <div className="container">
        <div className="columns">
          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Имя</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("name", e.target.value)}
                defaultValue={state.name}
                placeholder="Имя"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Фамилия</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("lastName", e.target.value)}
                defaultValue={state.lastName}
                placeholder="Фамилия"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Телефон</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("mobile", e.target.value)}
                defaultValue={state.mobile}
                placeholder="Телефон"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Количество человек</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("totalPeople", +e.target.value)}
                defaultValue={state.totalPeople}
                placeholder="Количество человек"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Дата прибытия</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("arrivalDate", e.target.value)}
                defaultValue={state.arrivalDate}
                placeholder="Дата прибытия"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Дата отбытия</label>
              <input
                className="form-input input-sm"
                type="text"
                onChange={e => onChangeInputField("departureDate", e.target.value)}
                defaultValue={state.departureDate}
                placeholder="Дата отбытия"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Деньги</label>
              <input
                className="form-input input-sm"
                onChange={e => onChangeInputField("money", e.target.value)}
                defaultValue={state.money}
                type="text"
                placeholder="Деньги"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Состояние оплаты</label>
              <select
                onChange={e => onChangeInputField("paymentState", +e.target.value)}
                className="form-select select-sm">
                <option selected={state.paymentState === 0} value={0}>
                  Не оплачено
                </option>
                <option selected={state.paymentState === 1} value={1}>
                  Оплачено
                </option>
              </select>
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Дополнительно</label>
              <input
                className="form-input input-sm"
                onChange={e => onChangeInputField("additionally", e.currentTarget.value)}
                defaultValue={state.additionally}
                type="text"
                placeholder="Дополнительно"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Количество обедов</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("numberMidday", +e.currentTarget.value)}
                defaultValue={state.numberMidday}
                placeholder="Количество обедов"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Количество ужинов</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("numberDinners", +e.currentTarget.value)}
                defaultValue={state.numberDinners}
                placeholder="Количество ужинов"
              />
            </div>
          </div>

          <div className="column col-3">
            <div className="form-group">
              <label className="form-label">Количество завтраков</label>
              <input
                className="form-input input-sm"
                type="number"
                onChange={e => onChangeInputField("numberBreakfasts", +e.currentTarget.value)}
                defaultValue={state.numberBreakfasts}
                placeholder="Количество завтраков"
              />
            </div>
          </div>

          <div className="column col-3">
            <button className="btn btn-primary mt-2" onClick={onSaveRow}>
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
