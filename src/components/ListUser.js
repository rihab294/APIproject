import React, { useEffect, useState } from 'react'
import UserCard from './UserCard';
import axios from "axios";

function ListUser() {
    const [users, setUsers]=useState([]);
    useEffect(()=>{
      axios.get("https://jsonplaceholder.typicode.com/users/").then((res)=>{
            setUsers(res.data)
    });
    });
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      width: "90%",
      margin: "50px auto",
      gap: "20px"
    }}
    >
    {
        users.map((user)=>(
          <UserCard user={user}  />))
    }
    </div>
  )
}

export default ListUser;