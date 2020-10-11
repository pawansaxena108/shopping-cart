import React from 'react';
import Header from './component_1';
const components=(props) => {
const items=props.items;

const headers=items.map((item)=> <Header item={item} someaction={props.someaction} value={props.value}> 
</Header>
);
return(<div>{headers}</div>);

}

export default components;
