import React, { Component } from 'react';
import Landingpage from './Components/Landingpage';
import Article from './Components/Article';
import Comments from "./Components/Comments";
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions={ //particles.js
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "black",
                      blur: 1
                    }
                  },
                  number:{
                    value:152,
                    density:{
                      enable:true,
                      value_area:800
                  }
                },
                polygon:{
                    nb_sides:12
                },
                move:{
                  speed:25
                }
              }
            }

class App extends Component {
  constructor(){
    super();
    this.state={
              username:"",
              comment:"",
              id:"",
              list:[],
              listsorted:[],
              sortrecentbuttonclicked:false,
              //commentDate:"",
              route:"home"
     }
  }
  
  componentDidMount(){  //lifecycle hook
    fetch("https://warm-woodland-87794.herokuapp.com/")  //api call to backend
          .then(response => response.json())
          .then(data => {
            //changing state of a variable 
            this.setState({list:  data.map((user,i) => {
              //list contains all users
                return (
                     <Comments 
                         key={i}
                         id={user.id}
                         username={user.name}
                         comment={user.comment}
                         commentDate={user.commentedon}
                        />
                        )})})
          })
          .catch(err => console.log(err))

          //for sorted users (rsorted list from backend)
          fetch("https://warm-woodland-87794.herokuapp.com/sortRecent")
          .then(response => response.json())
          .then(data => {
            this.setState({listsorted:  data.map((user,i) => {
                return (
                     <Comments 
                         key={i}
                         id={user.id}
                         username={user.name}
                         comment={user.comment}
                         commentDate={user.commentedon}
                        />
                        )})})
            
          })
          .catch(err => console.log(err))
  }

  //function to change state of user to given input
  onNameEnter =(event)=>{
  this.setState({username:event.target.value})
  }

//function for changing route from comment page to landing page
  onRouteChange =(route)=>{
    if(this.state.username ){
      this.setState({route:route})
    }
    //register point
    fetch("https://warm-woodland-87794.herokuapp.com/register",{
    method:'post',
    headers:{'Content-Type':"application/json"},
    body:JSON.stringify({
        username:this.state.username
    })
    })
     .then(response => response.json())
      .then(data => this.setState({id:data.id}))
  }

//function for changing state of comment to entererd input
    onCommentEnter = (event) =>{
        this.setState({comment:event.target.value})
        console.log(this.state.comment)
  }

//posting function(sends comment data to backend )
    onPostIt = () =>{
        fetch(`https://warm-woodland-87794.herokuapp.com/comment/${this.state.id}`,{
          method:'post',
          headers:{'Content-Type':"application/json"},
          body:JSON.stringify({
              comment:this.state.comment
              //commentDate:new Date()
          })
          })
           .then(response => response.json())
            .then(data => console.log(data))
  }

// for sorting (changes to be made)
  onSortRecentComments= ()=>{
console.log("data")
//this.setState({})
this.setState({sortrecentbuttonclicked:true})
console.log(this.state.sortrecentbuttonclicked)          
  }
  
//main render function
  render() {
    return (
      <div className="pa2 br ba b--light-gray outer">
      <Particles 
       params={particlesOptions} className="particles"/>
      {
          this.state.route === "commentPage"  
        ? <Article username={this.state.username} ///passing props to component
                   routeChange={this.onRouteChange} 
                   postIt={this.onPostIt}
                   commentEnter={this.onCommentEnter}
                   sortRecentComments={this.onSortRecentComments}
                   list={this.state.list}
                   listsorted={this.state.listsorted}
                   sortrecentbuttoncliked={this.state.sortrecentbuttonclicked}/> 
        : <Landingpage nameEnter={this.onNameEnter}
                   routeChange={this.onRouteChange}/>
       }
       
      </div>
    );
  }
}

export default App;
