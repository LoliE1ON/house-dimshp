import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { generateRecords } from "../../store/Record/actions";
import { parse, format, addDays } from "date-fns";
import { AddRecord } from "./AddRecord";
import { RootState } from "../../store/reducers";

export const Header = () => {
  const dispatch = useDispatch();
  let { date } = useParams();
  const isLoadingGenerateRecords = useSelector((state: RootState) => state.record.isLoadingGenerateRecords);
  const isLoadingSwitchDate = useSelector((state: RootState) => state.record.isLoadingSwitchDate);
  const isLoadingAddRecord = useSelector((state: RootState) => state.record.isLoadingAddRecord);

  const onGenerateRows = () => {
    dispatch(generateRecords(date));
  };

  return (
    <header className="navbar-container navbar">
      <section className="navbar-section">
        <Link to="/" className="navbar-brand mr-2 text-bold">
          <i className="fab fa-firefox pr-2 text-primary" />
          Home
        </Link>
      </section>
      <section
        className="navbar-section text-center"
        style={{
          flexDirection: "column",
        }}>
        <div className="btn-group btn-group-block">
          <Link
            to={`/records/${format(addDays(parse(date, "dd.MM.yyyy", new Date()), -1), "dd.MM.yyyy")}`}
            className="btn">
            Prev
          </Link>
          <button className="btn text-bold">
            {isLoadingSwitchDate && <i className="fas fa-circle-notch fa-spin mr-2 text-primary" />} {date}
          </button>
          <Link
            to={`/records/${format(addDays(parse(date, "dd.MM.yyyy", new Date()), 1), "dd.MM.yyyy")}`}
            className="btn">
            Next
          </Link>
        </div>
      </section>
      <section className="navbar-section">
        {isLoadingGenerateRecords && <i className="fas fa-circle-notch fa-spin mr-2 text-primary" />}
        <button className="btn mr-2" onClick={onGenerateRows}>
          Сгенерировать строки
        </button>

        <AddRecord />
      </section>
    </header>
  );
};
