import React, { useState, useEffect } from "react";
import instagramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";
import "./Main.css";

const Main = ({ selectedPunk, punkListData }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]);

  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighlight">
          <div className="punkContainer">
            <img
              className="selectedPunk"
              src={activePunk.image_original_URL}
              alt=""
            />
          </div>
        </div>
        <div className="punkDetails" style={{ color: "#fff" }}>
          <div className="title">Active punk</div>
          <span className="itemNumber">#</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img src={activePunk.image_original_URL} alt="" />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x496f85c7e7b8d803E5BBAD8F3b31AE88c8A91bBC</div>
              <div className="ownerHandle">@codingdave</div>
            </div>
            <div className="ownerLink">
              <img src={instagramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
