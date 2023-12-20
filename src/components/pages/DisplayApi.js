import React from "react";
import "./DisplayApi.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

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
      <div className="container">
        <nav className="sidebar">
          <ul>
            <li>
              <Link to="/setup">Setup</Link>
            </li>
            <li>
              <Link to="/opening">Opening</Link>
            </li>
            <li>
              <Link to="/datasample">Data Sample</Link>
            </li>
            <li>
              <Link to="/endpoints">Endpoints</Link>
            </li>
            <li>
              <Link to="/knownbugs">Known Bugs</Link>
            </li>
            <li>
              <Link to="/license">License</Link>
            </li>
            <li>
              <Link to="/pagination">Pagination</Link>
            </li>
            <li>
              <Link to="/query">Query</Link>
            </li>
            <li>
              <Link to="/techused">Technologies Used</Link>
            </li>
            <li>
              <Link to="/description">Description</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/createdatabase">Create Database</Link>
            </li>
            <li>
              <Link to="/examples">Examples</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* break */}
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
