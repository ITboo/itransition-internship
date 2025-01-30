import * as React from "react";
import Container from "@mui/material/Container";
import DataTable from "../widgets/Table";
import Header from "../widgets/Header";
import { auth, db } from "../config/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";
import {useNavigate } from "react-router-dom";
import AddUser from "../controllers/addUser";
const Home = () => {
  const [userList, setUserList] = useState([]);
  const [selected, setSelected] = useState([])
  const userCollectionRef = collection(db, "users");
  const navigate = useNavigate();
  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        console.log(filteredData);
        setUserList(filteredData);
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);

  if (!auth.currentUser) {
    navigate("/");
    return null;
  }


  return (
    <Container>
      <Header />
      <AddUser/>
      <DataTable userList={userList} selected={selected} setSelected={setSelected}/>
    </Container>
  );
};

export default Home;
