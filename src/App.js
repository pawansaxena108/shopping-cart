import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from "./layout";
import Header from "./component_1";
import { Button, Card } from 'react-bootstrap';
import Headers from './components';
import axios from "axios";
import Component2 from "./component2";
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';



class App extends Component {

 state={author:'',value:1,len:0,posts:[],error:false,flag:false}

 clickHandler=()=>{
   this.setState((state)=>{
  
     return {
       value:state.value+2}
     })
 }
componentDidUpdate(prevProps, prevState) {
  
}

componentDidMount () {
    axios.get('https://jsonmock.hackerrank.com/api/countries?page=2')
        .then(response => {
            const posts = response.data;
            this.setState({posts:posts,flag:true})
            console.log(posts.data[0].name)
        }).catch(console.log ('exception occured'))
        
}


 countHandler=()=>{
    this.setState((state)=>{
     return {len:state.len+1}
   })
 }
 onClickHandler(id,e) {
  e.target.setAttribute('class','alert alert-info')
  
  console.log(this.state.posts.data[id].name,e.target.type);
}

 render(){
 
 if (this.state.flag) { 
  let data=this.state.posts.data;
  let Cards=data.map((item,id)=>{
    return <Component2 name={item.name} id={id} deleteHandler={this.onClickHandler.bind(this,id)}></Component2>
    
  })
 return (
  <Router >
        <div className="App">
          
    <Layout>
     
 
    
    <Switch>
 <Route exact path="/" >{Cards}</Route>
    <Route path="/home" component={Header}></Route>
    </Switch>
 
   
   <p>inside </p>
   
    
     
    
   </Layout>
   
    </div>
       </Router>
 
  );}
  else {
    return (  
    <div>loading...</div>
      
    )
  }
}
}

export default App;
