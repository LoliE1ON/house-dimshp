import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setDisplayHeader } from "../../../store/Config/actions";
import { Header } from "../../house/Header";
import { RootState } from "../../../store/reducers";
import { getListRecords } from "../../../store/Record/actions";
import { TableFox } from "../../table/Fox";
import { EditRecord } from "../../house/EditRecord";

export const Records = () => {
  const dispatch = useDispatch();
  let { date } = useParams();

  const records = useSelector((state: RootState) => state.record.list);

  // Toggle Header
  useEffect(() => {
    dispatch(setDisplayHeader(false));
    return () => {
      dispatch(setDisplayHeader(true));
    };
  }, [dispatch]);

  // Select rows if change date
  useEffect(() => {
    dispatch(getListRecords(date));
  }, [dispatch, date]);

  return (
    <div>
      <Header />

      {records.length ? (
        <div className="container">
          <TableFox
            id="house"
            columns={[
              {
                title: "Комната",
                type: "string",
                name: "room",
              },
              {
                title: "Имя",
                type: "string",
                name: "name",
              },
              {
                title: "Фамилия",
                type: "string",
                name: "lastName",
              },
              {
                title: "Телефон",
                type: "string",
                name: "mobile",
              },
              {
                title: "Количество человек",
                type: "int",
                name: "totalPeople",
              },
              {
                title: "Дата прибытия",
                type: "date",
                name: "arrivalDate",
              },
              {
                title: "Дата отбытия",
                type: "date",
                name: "departureDate",
              },
              {
                title: "Сумма",
                type: "float",
                name: "money",
              },
              {
                title: "Состояние оплаты",
                type: "int",
                name: "paymentState",
              },
              {
                title: "Дополнительно",
                type: "string",
                name: "additionally",
              },
              {
                title: "Ужины",
                type: "int",
                name: "numberDinners",
              },
              {
                title: "Обеды",
                type: "int",
                name: "numberMidday",
              },
              {
                title: "Завтраки",
                type: "int",
                name: "numberBreakfasts",
              },
            ]}
            data={records}
            sort={{
              name: "room",
              sort: "desc",
            }}
            EditComponent={EditRecord}
          />
        </div>
      ) : (
        <div className="m-2">
          <div className="toast toast-error ">Записи отсуствуют!</div>
        </div>
      )}
    </div>
  );
};
