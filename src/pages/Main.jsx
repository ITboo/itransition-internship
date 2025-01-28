import * as React from "react";
import Container from '@mui/material/Container';
import DataTable from '../widgets/Table'
import Header from '../widgets/Header'
import { db } from "../config/firebase";
import { useState, useEffect } from "react";
import { collection, getDocs } from "@firebase/firestore";


const Home = () => {
  const [userList, setUserList] = useState([]);
  const userCollectionRef = collection(db, "users");
  useEffect(() => {
    const getUserList = async () => {
      try {
        const data = await getDocs(userCollectionRef);
        const filteredData = data.docs.map((doc)=>({...doc.data(), id:doc.id}))
        console.log(filteredData)
        setUserList(filteredData)
      } catch (error) {
        console.error(error);
      }
    };
    getUserList();
  }, []);
  return (
    <Container>
      <Header/>
      <DataTable userList={userList}/>
    </Container>
  )
}

export default Home