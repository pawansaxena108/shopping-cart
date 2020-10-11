import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import Layout from "./layout";
import Header from "./component_1";
import { Button, Card } from 'react-bootstrap';
import Headers from './components';
import Axios from "axios";

class App extends Component {
 state={items:['pawan','bolu','swati'],value:1,len:0}

 clickHandler=()=>{
   this.setState((state)=>{

     return {
       value:state.value+2}
     })
 }
componentDidUpdate(prevProps, prevState) {
  
}

componentDidMount() {
   Axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(response => console.log(response))

}


 countHandler=(event)=>{
    this.setState((state)=>{
     return {len:state.len+1}
   })
 }


 render(){
  return (
    <div className="App">
    <Layout>
      <Headers items={this.state.items} someaction={this.clickHandler} value={this.state.value}></Headers>
   </Layout>
   
    </div>
  );
}
}

export default App;
