import React from "react"

//import {subtract, sum, divide, multiply} from "./math"
//import MathCompStyle from "./MathCompStyle.css"
import Account from "./account"




class AccountComp extends React.Component {
    constructor() {
        super()
        this.account = new Account(0, "Jawad")
        this.state = {
            input: 0,
            answ: 0
        }



    }


    handleChange= (event) => {
        if (event.target.id === "amountInput") {
            this.setState({input: event.target.value})
        } else {
            //this.setState({num2: event.target.value})
        }
           console.log(this.state)
    }


   accountHandleClick = (event) => {
    if (event.target.id === "amountDeposit" ) {
        this.account.deposit(Number(this.state.input))
        console.log("Balance",this.account.balance);
        // this.setState({
        //      answ: this.account.balance
        // }) 
        console.log(this.state)
    } else if (event.target.id === "amountWithdraw" ) {
        this.account.withdraw(Number(this.state.input))
        console.log("Balance",this.account.balance);
        // this.setState({
        //      answ: this.account.balance
        // }) 
    } else if (event.target.id === "balance" ) {
         this.account.getBalance()
        this.setState({
             answ: this.account.balance
        })
    }
}

    render() {

        //let answer = sum(Number(this.state.num1),Number(this.state.num2))
        return (
            <div className ="centered">
                <h1 className = "Header"> Account Details </h1>
                <div>
                    <input  id = "amountInput" className = "inputDeposit" onChange={this.handleChange} /><br/>
                    <button id = "amountDeposit" className ="buttons" onClick={this.accountHandleClick}> Deposit </button>
                    <button id = "amountWithdraw" className ="buttons" onClick={this.accountHandleClick}> Withdraw </button>
                    <button id = "balance" className ="buttons" onClick={this.accountHandleClick}> Balance </button>
                </div>
            
                <h2>Account Name :            {this.account.name}</h2>
                <h2>Account Balance :    {this.state.answ}</h2>
                           
            </div>
        )    
    }
}

export default AccountComp