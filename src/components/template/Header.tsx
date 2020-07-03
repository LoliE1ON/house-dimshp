import React from "react";

import "./styles/header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

export const Header = () => {
  const displayHeader = useSelector((state: RootState) => state.config.displayHeader);

  const HeaderBlock = () => (
    <header className="navbar-container navbar">
      <div className="container">
        <div className="columns">
          <div className="column col-7 col-mx-auto col-lg-12">
            <div className="columns">
              <div className="column col-9">
                <Link to="/" className="navbar-brand mr-2 text-bold">
                  <i className="fab fa-firefox pr-2 text-primary" />
                  Home
                </Link>

                <Link to={`/records/${new Date().toLocaleDateString("ru-RU")}`} className="btn btn-link">
                  Records
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );

  return displayHeader ? <HeaderBlock /> : <></>;
};
