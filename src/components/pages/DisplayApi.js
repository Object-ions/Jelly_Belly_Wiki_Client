import React from "react";
import Setup from "../api/Setup";
import Opening from "../api/Opening";
import DataSample from "../api/DataSample";
import Endpoints from "../api/Endpoints";
import KnownBugs from "../api/KnownBugs";
import License from "../api/License";
import Pagination from "../api/Pagination";
import Query from "../api/Query";
import TechUsed from "../api/TechUsed";
import Description from "../api/Description";
import Features from "../api/Features";

const DisplayApi = () => {
  return (
    <div className="">
      <Opening />
      <Description />
      <Features />
      <TechUsed />
      <Setup />
      <DataSample />
      <Endpoints />
      <KnownBugs />
      <License />
      <Pagination />
      <Query />
    </div>
  );
};

export default DisplayApi;
