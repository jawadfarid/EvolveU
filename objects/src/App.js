import React, { Component } from 'react';
import './App.css';
import MathComp from "./components/MathComp"
import AccountComp from "./components/AccountComp"
import Comp240Comp from "./components/Comp240Comp"
import AccountControllerComp from "./components/AccountControllerComp"
import CommunityComp from "./components/CommunityComp"
import LinkedListComp from "./components/LinkedListComp"
import FifoComp from "./components/FifoComp"
import Home from "./components/Home"
import Header from "./components/Header"



class App extends Component {
  constructor() {
    super() 
      this.state = {
        view: "home"
      }
  }
   
   handleClick = (event) => { 
    //console.log(event.target.id)

    if (event.target.id === "1") {
      console.log("clicked")
      this.setState({
        view: "math"
      })
      console.log(this.state)
    } else if (event.target.id === "2"){
      console.log("clicked")
      this.setState({
        view: "account"
      })
        console.log(this.state)
    } else if (event.target.id === "3"){
      //console.log("clicked")
      this.setState({
        view: "accountcontroller"
      })
        //console.log(this.state) 
    }  else if (event.target.id === "4"){
      //console.log("clicked")
      this.setState({
        view: "community"
      })
        //console.log(this.state) 
    } else if (event.target.id === "5"){
      //console.log("clicked")
      this.setState({
        view: "linkedlist"
      })
    } else if (event.target.id === "6"){
      //console.log("clicked")
      this.setState({
        view: "fifo"
      })
    } else if (event.target.id === "7"){
      //console.log("clicked")
      this.setState({
        view: "home"
      })
    } else if (event.target.id === "8"){
      //console.log("clicked")
      this.setState({
        view: "comp240"
      })
    } 
  } 



  render() {

    let setPage;
     if (this.state.view === "math") {
            setPage = <MathComp/>;
      } else if (this.state.view === "home"){
         setPage = <Home/>;
      } else if (this.state.view === "account"){
         setPage = <AccountComp/>;
      } else if (this.state.view === "accountcontroller"){
         setPage = <AccountControllerComp/>;
      } else if (this.state.view === "community"){
         setPage = <CommunityComp/>;
      } else if (this.state.view === "linkedlist"){
         setPage = <LinkedListComp/>;
      } else if (this.state.view === "fifo"){
         setPage = <FifoComp/>;
      } else if (this.state.view === "comp240"){
         setPage = <Comp240Comp/>;
      }


    return (
      <div>
        <div className = "Navbar">
          <Header handleClick={this.handleClick}
                  />
        </div>
      {setPage}
      </div>

            
    );
  }
}

export default App;
