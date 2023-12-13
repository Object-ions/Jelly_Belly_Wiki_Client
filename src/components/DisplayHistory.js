import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DisplayHistory = () => {
  return (
    <div className="DisplayHistory">
      <div className="container">
        <h3>a Little Bit of History ...</h3>
        <div className="history-grid">
          <div className="item-wrapper">
            <div>
              <h4>1869</h4>
              <p>
                Gustav Goelitz opens a candy business in Belleville, Illinois,
                laying the foundation for the company's future.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>1898</h4>
              <p>
                The Goelitz family specializes in mellocremes, including candy
                corn.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayHistory;
