import React from "react";
import Header from "./component_1";
import {Container,Row,Col} from "react-bootstrap";
const layout=(props)=>{
return(

<Container fluid>

<Row>
<Col md="4" xs="12">
{props.children}
</Col>
</Row>
</Container>
)


}

export default layout;
