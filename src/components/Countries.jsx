import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import initilizeCountries from "../services/countriesServices";

const Countries = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);
  const isLoading = useSelector((state) => state.countries.isLoading);
  console.log("countries: ", countries);
  console.log("isLoading: ", isLoading);
  useEffect(() => {
    dispatch(initilizeCountries());
  }, [dispatch]);

  // Handle the loading case here first(use col and spinner)
  return <div>countries here</div>;

  // Handle the received data case here
};
export default Countries;
