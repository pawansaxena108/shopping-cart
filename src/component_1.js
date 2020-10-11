import React from "react";
import {Card,Button} from "react-bootstrap";

const header=(props)=>{
return(
 <div>
  <Card style={{ width: '18rem' }} >
    <Card.Img variant="top" src="./logo192.png" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        value updated {props.value}
      </Card.Text>
      <Button variant="primary" onClick={props.someaction}>{props.item}</Button>
    </Card.Body>
  </Card>

<input onChange={props.textcount}></input>
<p>{props.length}</p>
</div>
)


}

export default header;
