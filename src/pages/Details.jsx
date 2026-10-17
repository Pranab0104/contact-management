import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Details.scss";

const Details = ({ allUser }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const user = allUser[Number(id)];

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Contact Not Found</h1>

        <button
          onClick={() => navigate("/contactlist")}
          className="bg-violet-500 px-5 py-2 rounded-lg"
        >
          Back to Contacts
        </button>
      </div>
    );
  }

  return (
    <main className="details-page">
      <div className="details-card">
        <div className="details-header">
          <div className="details-avatar">
            {user.name.charAt(0).toUpperCase()}
          </div>

          <div className="details-heading">
            <h1>{user.name}</h1>
            <p>Contact Information</p>
          </div>
        </div>

        <div className="details-field">
          <h3>Email Address</h3>
          <p>{user.email}</p>
        </div>

        <div className="details-field">
          <h3>Phone Number</h3>
          <p>{user.phone}</p>
        </div>

        <div className="details-field">
          <h3>Message</h3>
          <p>{user.message || "No message added."}</p>
        </div>

        <button
          className="details-back-button"
          onClick={() => navigate("/contactlist")}
        >
          ← Back to Contact List
        </button>
      </div>
    </main>
  );
};

export default Details;
