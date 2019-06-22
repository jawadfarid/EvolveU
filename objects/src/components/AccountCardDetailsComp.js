import React from "react"





class AccountCardDetailsComp extends React.Component {
     constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
        //console.log(this.props)
        return (
            <div style = {{float: "right"}}>
                <h3>Account ID: {this.props.accountName.id}</h3>
                <h3>Account Name: {this.props.accountName.name}</h3>
                <h3> Account Balance: ${this.props.accountName.balance}</h3>
                
                <input value = {this.props.newDepositInput} type="number" onChange={this.props.depositOnChange} />
                <button id ={this.props.accountName.id} onClick={this.props.depositOnClick}> Deposit </button><br/>
                
                <input value = {this.props.newWithdrawInput} type="number" onChange={this.props.withdrawOnChange}/>
                <button id ={this.props.accountName.id} onClick={this.props.withdrawOnClick}> Withdraw </button><br/>
                <button onClick={this.props.saveOnClick}> Close </button>
            </div>
        )    
    }
}

export default AccountCardDetailsComp