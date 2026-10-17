import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Contact from "./pages/ContactForm";
import ContactList from "./pages/ContactList";
import Details from "./pages/Details";


const App = () => {
  const [allUser, setAllUser] = useState([]);

  return (
    <Routes>
      <Route path="/" element={<Contact setAllUser={setAllUser} />} />

      <Route path="/contactlist" element={<ContactList allUser={allUser} setAllUser={setAllUser}/>} />

      <Route path="/contactinfo/:id" element={<Details allUser={allUser} />} />
    </Routes>
  );
};

export default App;
