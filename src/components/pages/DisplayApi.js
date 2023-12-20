import React, { useState } from "react";
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
  const [activeComponent, setActiveComponent] = useState("opening");

  const getActiveComponent = () => {
    switch (activeComponent) {
      case "opening":
        return <Opening />;
      case "setup":
        return <Setup />;
      case "datasample":
        return <DataSample />;
      case "endpoints":
        return <Endpoints />;
      case "knownbugs":
        return <KnownBugs />;
      case "license":
        return <License />;
      case "pagination":
        return <Pagination />;
      case "query":
        return <Query />;
      case "techused":
        return <TechUsed />;
      case "description":
        return <Description />;
      case "features":
        return <Features />;
      case "createdatabase":
        return <CreateDatabase />;
      case "examples":
        return <Examples />;
      default:
        return <Opening />;
    }
  };

  return (
    <div className="API">
      <div className="container">
        <aside className="sidebar">
          <ul>
            <li
              className={activeComponent === "opening" ? "active" : ""}
              onClick={() => setActiveComponent("opening")}
            >
              Opening
            </li>
            <li
              className={activeComponent === "setup" ? "active" : ""}
              onClick={() => setActiveComponent("setup")}
            >
              Setup
            </li>
            <li
              className={activeComponent === "datasample" ? "active" : ""}
              onClick={() => setActiveComponent("datasample")}
            >
              Data Sample
            </li>
            <li
              className={activeComponent === "endpoints" ? "active" : ""}
              onClick={() => setActiveComponent("endpoints")}
            >
              Endpoints
            </li>
            <li
              className={activeComponent === "knownbugs" ? "active" : ""}
              onClick={() => setActiveComponent("knownbugs")}
            >
              Known Bugs
            </li>
            <li
              className={activeComponent === "license" ? "active" : ""}
              onClick={() => setActiveComponent("license")}
            >
              License
            </li>
            <li
              className={activeComponent === "pagination" ? "active" : ""}
              onClick={() => setActiveComponent("pagination")}
            >
              Pagination
            </li>
            <li
              className={activeComponent === "query" ? "active" : ""}
              onClick={() => setActiveComponent("query")}
            >
              Query
            </li>
            <li
              className={activeComponent === "techused" ? "active" : ""}
              onClick={() => setActiveComponent("techused")}
            >
              Technologies Used
            </li>
            <li
              className={activeComponent === "description" ? "active" : ""}
              onClick={() => setActiveComponent("description")}
            >
              Description
            </li>
            <li
              className={activeComponent === "features" ? "active" : ""}
              onClick={() => setActiveComponent("features")}
            >
              Features
            </li>
            <li
              className={activeComponent === "createdatabase" ? "active" : ""}
              onClick={() => setActiveComponent("createdatabase")}
            >
              Create Database
            </li>
            <li
              className={activeComponent === "examples" ? "active" : ""}
              onClick={() => setActiveComponent("examples")}
            >
              Examples
            </li>
          </ul>
        </aside>
        <section className="main-content">{getActiveComponent()}</section>
      </div>
    </div>
  );
};

export default DisplayApi;
