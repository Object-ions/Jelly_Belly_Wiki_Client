import React, { useState } from "react";
import "./DisplayApi.css";
import Opening from "../api/Opening";
import Setup from "../api/Setup";
import CreateDatabase from "../api/CreateDatabase";
import Endpoints from "../api/Endpoints";
import Query from "../api/Query";
import DataSample from "../api/DataSample";
import Examples from "../api/Examples";
import Pagination from "../api/Pagination";
import AboutThisProject from "../api/AboutThisProject";
import CopyRights from "../api/CopyRights";

const DisplayApi = () => {
  const [activeComponent, setActiveComponent] = useState("aboutThisProject");

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
      case "pagination":
        return <Pagination />;
      case "query":
        return <Query />;
      case "createdatabase":
        return <CreateDatabase />;
      case "examples":
        return <Examples />;
      case "aboutThisProject":
        return <AboutThisProject />;
      case "copyrights":
        return <CopyRights />;
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
              className={activeComponent === "aboutThisProject" ? "active" : ""}
              onClick={() => setActiveComponent("aboutThisProject")}
            >
              About This Project
            </li>
            <li
              className={activeComponent === "opening" ? "active" : ""}
              onClick={() => setActiveComponent("opening")}
            >
              Introductions
            </li>
            <li
              className={activeComponent === "setup" ? "active" : ""}
              onClick={() => setActiveComponent("setup")}
            >
              Setup
            </li>
            <li
              className={activeComponent === "createdatabase" ? "active" : ""}
              onClick={() => setActiveComponent("createdatabase")}
            >
              Create and Launch the Database
            </li>
            <li
              className={activeComponent === "endpoints" ? "active" : ""}
              onClick={() => setActiveComponent("endpoints")}
            >
              Endpoints
            </li>
            <li
              className={activeComponent === "query" ? "active" : ""}
              onClick={() => setActiveComponent("query")}
            >
              Query
            </li>
            <li
              className={activeComponent === "datasample" ? "active" : ""}
              onClick={() => setActiveComponent("datasample")}
            >
              Data Sample
            </li>
            <li
              className={activeComponent === "examples" ? "active" : ""}
              onClick={() => setActiveComponent("examples")}
            >
              How to Utilize This API
            </li>
            <li
              className={activeComponent === "pagination" ? "active" : ""}
              onClick={() => setActiveComponent("pagination")}
            >
              Pagination
            </li>
            <li
              className={activeComponent === "copyrights" ? "active" : ""}
              onClick={() => setActiveComponent("copyrights")}
            >
              Copyright and Data Accuracy
            </li>
          </ul>
        </aside>
        <section className="main-content">{getActiveComponent()}</section>
      </div>
    </div>
  );
};

export default DisplayApi;
