import React from "react";
import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div>
          <Header />
        </div>
        <main className="flex-grow">{children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}

export default Layout;
