import React from "react";
import Setup from "../api/Setup";
import Opening from "../api/Opening";
import DataSample from "../api/DataSample";
import Endpoints from "../api/Endpoints";
import KnownBugs from "../api/KnownBugs";
import Licence from "../api/Licence";
import Pagination from "../api/Pagination";
import Query from "../api/Query";
import TechUsed from "../api/TechUsed";
const DisplayApi = () => {
  return (
    <>
      <Opening />
      <Setup />
      <DataSample />
      <Endpoints />
      <KnownBugs />
      <Licence />
      <Pagination />
      <Query />
      <TechUsed />
    </>
  );
};

export default DisplayApi;
