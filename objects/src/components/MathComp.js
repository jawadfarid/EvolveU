import React from "react"
import {subtract, sum, divide, multiply} from "./math"




class MathComp extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 0,
            num2: 0,
            answ: 0
        }



    }


    handleChange= (event) => {
        if (event.target.id === "input1") {
            this.setState({num1: event.target.value})
        } else {
            this.setState({num2: event.target.value})
        }
           console.log(this.state)
    }


   operatorClick = (event) => {
    if (event.target.id === "calcKeyAdd" ) {
        this.setState({
            answ: sum(Number(this.state.num1), Number(this.state.num2))
        })} else if (event.target.id === "calckeysubtract" ) {
        this.setState({
            answ: subtract(Number(this.state.num1), Number(this.state.num2))
        })} else if (event.target.id === "calckeydivide" ) {
        this.setState({
            answ: divide(Number(this.state.num1), Number(this.state.num2))
        })} else if (event.target.id === "calckeymultiply" ) {
        this.setState({
            answ: multiply(Number(this.state.num1), Number(this.state.num2))
        })}
    }

    render() {

        //let answer = sum(Number(this.state.num1),Number(this.state.num2))
        return (
            <div className ="centered">
                <h1 className = "Header"> Hello World from MathComp </h1>
                <div className = "CalcDisplay">
                    <input  id = "input1" className = "input1" onChange={this.handleChange} />
                    <label>Number 1</label><br/>
                    <input id = "input2"  onChange={this.handleChange}/>
                    <label>Number 2</label>
                </div>
            

            
                <button id = "calcKeyAdd" className ="calcoperator" value = "+" name= "+" onClick={this.operatorClick}> + </button>
                <button id = "calckeysubtract" className="calcoperator"  value = "-" name= "-" onClick={this.operatorClick}> - </button>
                <button id = "calckeydivide" className ="calcoperator"  value = "/" name= "/" onClick={this.operatorClick}> / </button>
                <button id = "calckeymultiply" className ="calcoperator"  value = "*" name= "*" onClick={this.operatorClick}> x </button><br/><br/>
                <h1>{this.state.answ}</h1>
              
            </div>
        )    
    }
}

export default MathComp