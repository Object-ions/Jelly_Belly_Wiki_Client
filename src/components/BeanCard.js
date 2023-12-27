import { getDataFailure, getSingleDataSuccess } from "./../actions/index";
import { Link, useParams } from "react-router-dom";
import ErrorComponent from "./ErrorComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import LoadingComponent from "./LoadingComponent";
import useFetch from "../hooks/useFetch";

const initialState = {
  isLoaded: false,
  singleBean: {},
  error: null,
};

const BeanCard = () => {
  const { beanId } = useParams();

  const { error, isLoaded, singleBean } = useFetch(
    `https://localhost:5001/api/Beans/${beanId}`,
    initialState,
    getSingleDataSuccess,
    getDataFailure
  );

  if (error) {
    return <ErrorComponent error={error} />;
  } else if (!isLoaded) {
    return <LoadingComponent />;
  } else {
    return (
      <div className="container">
        <div className="Bean-card">
          <div className="bean-card-wrapper centered">
            {/* <h3>Flavor Name:</h3> */}
            <h3>{singleBean.flavorName}</h3>
          </div>
          <div className="bean-card-wrapper centered">
            {/* <p>Description:</p> */}
            <p>{singleBean.description}</p>
          </div>
          <div className="img-wrapper">
            <img src={singleBean.imageUrl} alt="Bean" />
          </div>
          <div className="bean-card-wrapper">
            <p>Group Name:</p>
            <p>{singleBean.groupName.join(",")}</p>
          </div>
          <div className="bean-card-wrapper">
            <p>Ingredients:</p>
            <p>{singleBean.ingredients.join(",")}</p>
          </div>
          <div className="grid">
            <div className="bean-card-wrapper">
              <p>Color Group:</p>
              <p>"{singleBean.colorGroup}"</p>
            </div>
            <div className="bean-card-wrapper">
              <p>Hexadecimal Color:</p>
              <div
                id="bean-bg-color"
                style={{ backgroundColor: singleBean.backgroundColor }}
              >
                {singleBean.backgroundColor}
              </div>
            </div>
            <div className="bean-card-wrapper">
              <p>Bean ID:</p>
              <p>{singleBean.beanId}</p>
            </div>
            <div className="bean-card-wrapper">
              <p>Kosher: </p>
              <p>{singleBean.kosher ? "yes" : "no"}</p>
            </div>
            <div className="bean-card-wrapper">
              {" "}
              <p>Seasonal:</p>
              <p>{singleBean.seasonal ? "yes" : "no"}</p>
            </div>
            <div className="bean-card-wrapper">
              <p>Gluten Free: </p>
              <p>{singleBean.glutenFree ? "yes" : "no"}</p>
            </div>
            <div className="bean-card-wrapper">
              {" "}
              <p>Sugar Free: </p>
              <p>{singleBean.sugarFree ? "yes" : "no"}</p>
            </div>
          </div>
          <Link to="/beans">
            Back to Beans
            <FontAwesomeIcon icon={faArrowRightLong} />
          </Link>
        </div>
      </div>
    );
  }
};

export default BeanCard;
