import React from "react"
import LinkedList from "./LinkedList"
import NodeComp from "./NodeComp"
import "./style_Accounts.css";


class LinkedListComp extends React.Component {
    constructor() {
        super()
        this.linkedList = new LinkedList();
        

         this.state = {
            // myLinkedListState : this.linkedList,
            position : this.linkedList.position,
            userSubjectInput : "",
            userAmountInput: ""
         }



    }

     nameOnChange= (event) => {
                console.log(event.target.value)
                if (event.target.name === "inputNameAttr"){
                this.setState({
                    userSubjectInput : event.target.value,
                   
                })
                } else if (event.target.name === "input2NameAttr") {
                    this.setState({
                    userAmountInput : event.target.value
                    })
                } 

                }

                
       


   addNodeHandleClick = (event) => {
    console.log("clicked")
    this.linkedList.insertNode(Number(this.state.userAmountInput),this.state.userSubjectInput)
        
      this.setState({
            position : this.linkedList.position,
            userSubjectInput : "",
          userAmountInput: ""
      }) 
        
    }

    prevNode = (event) => {
    	// console.log("Clicked")
    	this.linkedList.positionToPrev()
    	this.setState({
              position : this.linkedList.position
        }) 
    }

    nextNode = (event) => {
    	this.linkedList.positionToNext()
    	this.setState({
              position : this.linkedList.position
        }) 
    }

    delNode = (event) => {
    	// console.log("Clicked")
    	this.linkedList.deleteNode()
    	this.setState({
              position : this.linkedList.position
        }) 
    }

    moveToFirstNode = (event) => {
    	// console.log("Clicked")
    	this.linkedList.positionToFirst()
    	this.setState({
              position : this.linkedList.position
        }) 
    }

    moveToLastNode = (event) => {
    	// console.log("Clicked")
    	this.linkedList.positionToLast()
    	this.setState({
              position : this.linkedList.position
        }) 
    }





    render() {
        return (
          <div>
            	<br></br>
            	<div className="list-container0">
            		Total Amount of All Nodes : {this.linkedList.nodesAmountTotal()}<br></br>
            		Number of Nodes : {this.linkedList.size}<br></br>
            	</div>
            	
              <div className="list-container1">
		            <div className= "linkedList-topContainer">
		            	<input className ="inputs" name ="inputNameAttr" value = {this.state.userSubjectInput} type="text" onChange={this.nameOnChange}/> Node Subject<br/>
		            	<input className ="inputs" name ="input2NameAttr" value = {this.state.userAmountInput} type="text" onChange={this.nameOnChange}/> Node Amount<br/>
		              <button id = "addNode" className ="buttons" onClick = {this.addNodeHandleClick}> Add Node </button><br/><br/>
		            </div>    
	            </div>

	            <div className="list-container2">
	            	<button id = "MoveToFirstNode" className ="buttons" onClick = {this.moveToFirstNode}> Move to First Node </button><br/><br/>
	                <button id = "MoveToLastNode" className ="buttons" onClick = {this.moveToLastNode}> Move to Last Node </button><br/><br/>
	            </div>
              
              <div className="list-container3">
              	<button id = "PrevNode" className ="buttons" onClick = {this.prevNode}> Prev Node </button><br/><br/>
              	<NodeComp mylist= {this.linkedList}/>
              	<button id = "NextNode" className ="buttons" onClick = {this.nextNode}> Next Node </button><br/><br/>
             	</div>    

              <div className="list-container4">
                <button id = "DeltNode" className ="buttons" onClick = {this.delNode}> Delete Node </button><br/><br/>
              </div>
     
          </div>
        )    
    
}

}

export default LinkedListComp;