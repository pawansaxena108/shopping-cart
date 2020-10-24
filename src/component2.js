import React from 'react';
import { Card,Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

function component2(props) {
    return (
        <div>
            <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src="./logo192.png" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
         {props.id}
      </Card.Text>
      <Button variant="primary" class='someclass' onClick={props.deleteHandler} >{props.name}</Button>
    </Card.Body>
  </Card>
  <Link to='/home'>Home</Link>
        </div>
    );
}

export default component2;