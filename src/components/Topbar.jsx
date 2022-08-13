import "./topbar.css";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";

// function App() {
// return <Button variant="contained">Hello World</Button>;
// }

// AHH CEST TELLEMENT STYLER DE CREER UNE PAGE BRO
const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">LamaSocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar"></div>

        <input placeholder="entrer du txt"></input>
        <SearchIcon />
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItems">
            <PersonIcon />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItems">
            <ChatIcon />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItems">
            <NotificationsActiveIcon />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img
          src="/assets/pusuya yatmalik ucuz altcoin sepeti.png"
          alt="eren caner "
          className="topbarImg"
        />
      </div>
    </div>
  );
};

export default Topbar;
