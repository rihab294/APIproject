import React from 'react';
import Card from 'react-bootstrap/Card';

import {useNavigate} from 'react-router-dom'

function UserCard({user}) {
  const navigate = useNavigate();

    const navigateToUser = () => {

      navigate(`/Details/${user.id}`);
    };
 
return (
    <Card className='animation'  style={{ width: '18rem' ,margin:'20px' ,display: "inline-grid"}} onClick={navigateToUser}>
     <Card.Title >{user.name}</Card.Title>
      <Card.Body>

        <Card.Text>{user.phone}</Card.Text>

        </Card.Body>

    </Card>

  );
}

export default UserCard;