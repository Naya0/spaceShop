import React, { useEffect, useState } from "react";
import { planetsApi } from "~/api/planetsApi";

export function Welcome() {
  const [cars, setCars] = useState([]);

  // useEffect(() => {
  //   planetsApi.getPlanetssApi().then((res) => setCars(res.data));
  // }, []);

  console.log(cars)

  return (
    <main className="flex items-center justify-center pt-16 pb-4">dd</main>
  );
}
