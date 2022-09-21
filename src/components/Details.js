
import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import {useParams} from "react-router-dom";
import axios from "axios";
import {useEffect, useState} from "react";
import Loading from './Loading';


function Details() {
  const [user, setUser]=useState(null);
  const [loading, setLoading]= useState(true);

  const { id } = useParams();
  const getData = async()=> {
    const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUser(data);
    setLoading(false);
  };
  useEffect(() => {
    getData()
  }, [id]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "700px"
      }}
    >
    {
      loading ? (<Loading /> 
      ) : (
        <Card style={{ width: "18rem" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>{user && user.name}</ListGroup.Item>
            <ListGroup.Item>{user && user.email}</ListGroup.Item>
            <ListGroup.Item>{user && user.phone}</ListGroup.Item>
          </ListGroup>
        </Card>
    )}
    </div>
  );
    }
    
    
  
export default Details;