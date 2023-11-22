import { createContext, useEffect, useState } from "react";
const AppContext = createContext();
import axios from "axios";

let AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [images, setImages] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((response) => {
      setData(response.data.products);
      setImages(response.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
