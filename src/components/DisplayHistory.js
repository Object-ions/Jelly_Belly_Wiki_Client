import React from "react";
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

          <div className="item-wrapper">
            <div>
              <h4>1940s</h4>
              <p>
                During World War II, amidst sugar rationing, the company
                introduces Mint Wafers.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>1965</h4>
              <p>
                A significant breakthrough with the Goelitz Mini Jelly Beans,
                infused with flavor in both the center and the shell.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>1976</h4>
              <p>
                The first Jelly Belly jelly beans are introduced with flavors
                like Root Beer, Green Apple, Licorice, Cream Soda, Lemon,
                Tangerine, Very Cherry, and Grape.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>1980s</h4>
              <p>
                The brand gains significant popularity, notably with President
                Ronald Reagan as a fan.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>1996</h4>
              <p>
                The company begins printing the Jelly Belly name on every bean.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>2001</h4>
              <p>The company is renamed to Jelly Belly Candy Company.</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>2002</h4>
              <p>
                Introduction of Bertie Bott's Every Flavor Beans from the Harry
                Potter series.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>2004</h4>
              <p>Sales reach $125 million, indicating substantial growth.</p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>2008</h4>
              <p>
                BeanBoozled jelly beans are introduced, featuring wild and wacky
                flavors.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>2014</h4>
              <p>
                Draft Beer flavor, inspired by Hefeweizen ale, is introduced.
              </p>
            </div>
            <FontAwesomeIcon icon={faArrowRight} className="beatFade" />
          </div>

          <div className="item-wrapper">
            <div>
              <h4>2023</h4>
              <p>
                Ferrara Candy Company announces an agreement to acquire Jelly
                Belly Candy Company.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayHistory;
