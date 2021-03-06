import React from 'react';
import './InfoBar.css';
import { Link } from 'react-router-dom'
// import closeIcon from '../../icons/closeIcon';
// import onlineIcon from '../../icons/onlineIcon';

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      {/* <img className="onlineIcon" src={onlineIcon} alt="online icon" /> */}
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      {/* <a href="/"><img src={closeIcon} alt="close icon" /></a> */}
      <Link to="/"></Link>
    </div>
  </div>
);
export default InfoBar;