import React from "react";
import ContactInfo from "./ContactInfo";
import "./ContactList.scss";

const ContactList = ({ allUser, setAllUser }) => {
  return (
    <main className="contact-list min-h-screen p-4 md:p-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        My Contacts
      </h1>

      {allUser.length === 0 ? (
        <div className="text-center mt-20">
          <p className="text-lg mb-4">No contacts available yet!</p>

          <p className="text-gray-400">
            Add your first contact to see it here.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 w-full mx-auto">
          {allUser.map((user, idx) => (
            <ContactInfo
              key={idx}
              user={user}
              index={idx}
              allUser={allUser}
              setAllUser={setAllUser}
            />
          ))}
        </div>
      )}
    </main>
  );
};

export default ContactList;