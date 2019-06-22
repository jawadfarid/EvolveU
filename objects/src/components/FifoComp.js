import React from "react"
import Fifo from "./Fifo"
import Lifo from "./Lifo"
import FifoItemComp from "./FifoItemComp"
import LifoItemComp from "./LifoItemComp"
// import Node from "./Node"
// import NodeComp from "./NodeComp"
// import "./style_Accounts.css";


class FifoComp extends React.Component {
  constructor() {
    super()
    this.stack = new Fifo();
    this.queue = new Lifo()
    

    this.state = {
      stackArray : this.stack.fifo,
      queueArray: this.queue.lifo,
      // position : this.linkedList.position,
      stackUserInput : "",
      queueUserInput : "",
      // userAmountInput: ""
    }



  }


 stackOnChange= (event) => {
  console.log(event.target.value)
    if (event.target.name === "inputNameAttr"){
      this.setState({
        stackUserInput : event.target.value,
      })
    } 

  }

  queueOnChange= (event) => {
  console.log(event.target.value)
    if (event.target.name === "inputNameAttr"){
      this.setState({
        queueUserInput : event.target.value,
      })
    } 

  } 





  addStackHandleClick = (event) => {
    if (this.state.stackUserInput.length > 0){
      this.stack.addToTop(this.state.stackUserInput)
        this.setState({
          stackArray : this.stack.fifo,
          stackUserInput : "",
          });
    }
  } 
        

  addQueueHandleClick = (event) => {
    if (this.state.queueUserInput.length > 0) {
      this.queue.addToTop(this.state.queueUserInput)
        this.setState({
          queueArray : this.queue.lifo,
          queueUserInput : ""
        });
    }
  }

  delStackHandleClick = (event) => {
      // console.log("Clicked")
      this.stack.removeTop()
      this.setState({
              stackArray : this.stack.fifo
        }) 
    }

    delQueueHandleClick = (event) => {
      // console.log("Clicked")
      this.queue.removeTop()
      this.setState({
              queueArray : this.queue.lifo
        }) 
    }

  


  render() {
    const stackList = this.stack.fifo.map((item,i) => {
      return <FifoItemComp 
              key={i} 
              fifoItem={item} 
              />
    });

    const queueList = this.queue.lifo.map((item,i) => {
      return <LifoItemComp 
              key={i} 
              lifoItem={item} 
              />
    });
   


  return (
    <div >
      <div>
          <br></br>
          <div className="list-container0">
              LIFO LOGIC
            
          </div>
          
          <div className="list-container1">
            <div className= "linkedList-topContainer">
              <input className ="inputs" name ="inputNameAttr" value = {this.state.stackUserInput} type="text" onChange={this.stackOnChange} placeholder = "Enter Stack Item"/> <br/>
              
              <button id = "addItem" className ="buttons" onClick = {this.addStackHandleClick}> Add Item </button><br/>
              <button id = "delStack" className ="buttons" onClick = {this.delStackHandleClick}> Delete </button><br/>
            </div>    
          </div>

          <div className="list-container2">
            
          </div>
          
          <div className="fifo-container3" >
            {stackList.length> 0 ? stackList : "Stack is Empty"}
          </div>
      </div>

      <div>
          <br></br><br></br>
          <div className="list-container0">
              FIFO LOGIC
            
          </div>
          
          <div className="list-container1">
            <div className= "linkedList-topContainer">
              <input className ="inputs" name ="inputNameAttr" value = {this.state.queueUserInput} type="text" onChange={this.queueOnChange} placeholder = "Enter Queue Item"/> <br/>
              
              <button id = "addItem" className ="buttons" onClick = {this.addQueueHandleClick}> Add Item </button><br/>
              <button id = "delQueue" className ="buttons" onClick = {this.delQueueHandleClick}> Delete </button><br/>
            </div>    
          </div>

          <div className="list-container2">
            
          </div>
          
          <div className="fifo-container3" >
            {queueList.length> 0 ? queueList : "Queue is Empty"}

          </div>
      </div>        

            
    </div>
  )    
    
}

}

export default FifoComp;