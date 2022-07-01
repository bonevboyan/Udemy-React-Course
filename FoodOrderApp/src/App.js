import React from "react";

import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";

function App() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Meals />
      </main>
    </React.Fragment>
  );
}

export default App;
