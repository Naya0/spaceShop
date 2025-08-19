import React from "react";
import { useParams } from "react-router";


const categoryPage = () => {
  const { id } = useParams<{id: string }>();
  
  return <div>{id}</div>;
};

export default categoryPage;
