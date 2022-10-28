import React from "react";
import "./NavTab.css";
function NabTab() {
  return (
    <div className="container-fluid tab-body">
      <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
        <li className="nav-item">
          <a
            href="#home"
            className="nav-link active"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            id="home-tab"
            data-toggle="tab"
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#profile"
            className="nav-link"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            id="profile-tab"
            data-toggle="tab"
          >
            Profile
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#contact"
            className="nav-link"
            role="tab"
            aria-controls="contact"
            aria-selected="false"
            id="contact-tab"
            data-toggle="tab"
          >
            Contact
          </a>
        </li>
      </ul>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="container">
            <h1 className="bio-title">Who am I</h1>
            <p className="bio-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              commodi laboriosam ea odit in ipsam atque consequuntur obcaecati
              mollitia praesentium.
            </p>
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="profle"
          role="tabpanel"
          aria-labelleby="profile-tab"
        >
          ....
        </div>
      </div>
    </div>
  );
}

export default NabTab;
