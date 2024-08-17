import { useEffect } from "react";
import { service } from "../../service";

export const Table = () => {
  const getWeatherList = async () => {
    const res = await service.Weather.getWeather();
  };
  useEffect(() => {
    //api service
    getWeatherList();
  }, []);
  return <div> table</div>;
};
