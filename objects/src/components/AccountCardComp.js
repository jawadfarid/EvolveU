import React from "react";
import "./style_Accounts.css";




class AccountCardComp extends React.Component {
    constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
        // console.log(this.props)
        return (
            <div className="accountCard">
                    <ul>Account ID: {this.props.account.id}</ul>
                    <ul>Account Name: {this.props.account.name}</ul>
                    <ul>Account Balance: {this.props.account.balance}</ul>
                    <button id ={this.props.accountIndex} onClick={this.props.editOnClick}> Edit </button>
                    <button id ={this.props.accountIndex} onClick={this.props.delOnClick}> Delete </button>
                    <button id ={this.props.accountIndex} onClick={this.props.detailOnClick}> Details </button><br/><br/><br/>
                
            </div>
        )    
    }
}

export default AccountCardComp