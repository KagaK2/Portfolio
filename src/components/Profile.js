import React from "react";

const Profile = () => {
  return (
    <div className="profile-pic">
      <img src="/img/me.png" alt="wow" />
      <h4 className="rbft">Khanh Phan</h4>
      <span>Web Developer</span>
      <div className="contact-profile">
        <a href="https://www.linkedin.com/in/khanh-phan-782b08126/"><i className="fa fa-linkedin fa-2x" /></a>
        <a href="https://github.com/KagaK2"><i className="fa fa-github fa-2x" /></a>
        <a href="mailto:KhanhPhan1373@gmail.com"><i className="fa fa-envelope fa-2x" /></a>
        <a href="mailto:KhanhPhan1373@gmail.com"><i className="fa fa-phone fa-2x" /></a>
      </div>
    </div>
  );
};

export default Profile;
