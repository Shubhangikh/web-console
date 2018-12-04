import React, { Component } from "react";

class Profile extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="container">
          <figure className="grid-figure">
            <img
              className="grid-photo"
              src="images.png"
              width="130px"
              alt="icon"
            />
          </figure>
        </div>
        <h1>Profile</h1>
        <p>Bid Bid USer1</p>
        <p>bidbig@bidbig.com</p>
        <p>(212)234-7869</p>
        <button style={{ background: "blue", width: 120, color: "white" }}>
          Edit Profile
        </button>
      </div>
    );
  }
}

export default Profile;
