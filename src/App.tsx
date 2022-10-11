import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks/redux-hooks";
import { RootState } from "./redux/store";

import LoadingScreen from "./components/LoadingScreen";
import Application from "./routes";

const App: React.FC = () => {
  const [isLoading, setLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLoading(false);
  }, [dispatch]);
  return <Router>{isLoading ? <LoadingScreen /> : <Application />}</Router>;
};

export default App;
