import React from "react";
import "./DisplayApi.css";
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
import CreateDatabase from "../api/CreateDatabase";
import Examples from "../api/Examples";

const DisplayApi = () => {
  return (
    <>
      <Opening />
      <Description />
      <Features />
      <TechUsed />
      <Setup />
      <CreateDatabase />
      <Pagination />
      <Endpoints />
      <Query />
      <Examples />
      <DataSample />
      <KnownBugs />
      <License />
    </>
  );
};

export default DisplayApi;
