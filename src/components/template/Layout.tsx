import React from "react";

import "./styles/layout.css";

import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: any }) => {
  return (
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
