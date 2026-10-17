import React from "react";
import { useNavigate } from "react-router-dom";
import "./ContactInfo.scss";

const ContactInfo = ({ user, index, allUser, setAllUser }) => {
  const navigate = useNavigate();

  const deleteHandler = (e) => {
    e.stopPropagation();

    const copyUser = [...allUser];
    copyUser.splice(index, 1);

    setAllUser(copyUser);
  };

  return (
    <div
      className="contact-card"
      onClick={() => navigate(`/contactinfo/${index}`)}
    >
      <div className="card-header">
        <div className="card-avatar">{user.name.charAt(0).toUpperCase()}</div>

        <div>
          <h2>{user.name}</h2>
          <p>Contact Details</p>
        </div>
      </div>

      <div className="card-field">
        <span className="field-icon">✉</span>
        <div>
          <h4>Email</h4>
          <p>{user.email}</p>
        </div>
      </div>

      <div className="card-field">
        <span className="field-icon">☎</span>
        <div>
          <h4>Phone</h4>
          <p>{user.phone}</p>
        </div>
      </div>

      <div className="card-message">
        <h4>Message</h4>
        <p>{user.message || "No message added."}</p>
      </div>

      <button
        type="button"
        className="view-details"
        onClick={(e) => {
          e.stopPropagation();
          navigate(`/contactinfo/${index}`);
        }}
      >
        View Full Details →
      </button>

      <button type="button" className="delete-element" onClick={deleteHandler}>
        Delete the item
      </button>
    </div>
  );
};

export default ContactInfo;
