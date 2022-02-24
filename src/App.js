import React, { Fragment, useContext } from "react";
import Dropdowns from "./components/Dropdowns/Dropdowns";
import Header from "./components/Header/Header";
import DepartureList from "./components/DepatureList/DepartureList";
import Loader from "./components/Loader/Loader";
import Error from "./components/Error/Error";
import AppContext from "./store";

const App = () => {
  const appContext = useContext(AppContext);

  return (
    <Fragment>
      <Header />
      {appContext.showLoader && <Loader />}
      {appContext.showError && <Error />}
      {!appContext.showLoader && <Dropdowns />}
      {!appContext.showLoader &&
        Object.entries(appContext.departureList).length !== 0 && (
          <DepartureList />
        )}
    </Fragment>
  );
};

export default App;
