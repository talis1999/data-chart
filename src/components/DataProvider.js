import { useState, createContext, useEffect } from "react";
import { fetchAll } from "../utils/fetchData.js";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  useEffect(() => {
    setLoading(true);
    fetchAll().then((res) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  const [data, setData] = useState([]);
  const [timeUnit, setTimeUnit] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <DataContext.Provider
      value={{ timeUnit, setTimeUnit, data: data[timeUnit], loading }}
    >
      {children}
    </DataContext.Provider>
  );
};
