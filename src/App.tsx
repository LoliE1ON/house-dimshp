import React from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import "spectre.css/dist/spectre.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "./style.css";
import { Routes } from "./Routes";
import { Layout } from "./components/template/Layout";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
