import { Timestamp, addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../config/firebase";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "users"), {
        name,
        email,
        seen: "",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setName("");
      setEmail("");
    }
  };
  return (
    <div>
      addUser
      <form onSubmit={handleAddUser}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUser;
