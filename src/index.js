import React from "react";
import ReactDOM from "react-dom";
import { Image } from "semantic-ui-react";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <aside className="sidebar">
        <div className="logo">
          <h1>Influencer</h1>
        </div>
        <ul>
          <li>Item 1</li>
        </ul>
      </aside>

      <div className="content">
        <div className="search-bar">
          <div className="search-icon">search logo goes here</div>
          <div className="social">Instagram</div>
        </div>

        <div className="main-content">
          <div className="profile">
            <div className="avatar">
              <Image
                src="http://portal.bilardo.gov.tr/assets/pages/media/profile/profile_user.jpg"
                circular
              />
              <div className="badge">
                <Image
                  src="http://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Badge-PNG-Transparent-Image-500x500.png"
                  circular
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
