import React from "react";

// svg
import castCall from "../image/svg/castCall.svg"
import rocket from "../image/svg/rocket.svg"
import rupor from "../image/svg/rupor.svg"
// png
import freeAccess from "../image/PNG/freeAccess/00.png"

export const FreeAccess = (props) => {
  return <>
    <div className="free-access__wrapper">
      <div className="free-access__block">
        <img className="free-access__img-access" src={freeAccess} alt="free-access-img" />
      </div>
      <div className="free-access free-access__img orange">
        <div className="free-access__title">
          <h2 className="free-access__title-text">3-Day FREE <br/>Access to:</h2>
        </div>
        <div className="free-access__chips">
          <div className="free-access__chip">
            <img src={castCall} alt="chip" className="free-access__chip-img"/>
            <span className="free-access__chip-text">Casting<br/> Calls</span>
          </div>
          <div className="free-access__chip">
            <img src={rocket} alt="chip" className="free-access__chip-img"/>
            <span className="free-access__chip-text">400+ Talent<br/> Agencies</span>
          </div>
          <div className="free-access__chip">
            <img src={rupor} alt="chip" className="free-access__chip-img"/>
            <span className="free-access__chip-text">Actor <br/>Training</span>
          </div>
        </div>
        <div className="free-access__button">
          <button className="classic-button" onClick={() => props.enterSignIn()}>
            JOIN FOR FREE
          </button>
        </div>
        <div className="free-access__disclaimer">
          <span className="free-access__disclaimer-text">
            Get a 3-day free access to Superstarted membership completely for FREE - no strings attached, no questions asked, cancel anytime.
          </span>
        </div>
      </div>

    </div>
  </>
};

export default FreeAccess;