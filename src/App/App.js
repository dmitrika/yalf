import { useState } from "react";

import { pages } from "../Page";
import { Login } from "../Login";
import { Welcome } from "../Welcome";

export function App({ API }) {
  const [currentPage, setCurrentPage] = useState(pages.login);

  return (
    <>
      {currentPage === pages.login && (
        <Login API={API} setCurrentPage={setCurrentPage} />
      )}
      {currentPage === pages.welcome && (
        <Welcome setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}
