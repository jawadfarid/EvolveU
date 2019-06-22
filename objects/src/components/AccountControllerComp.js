import React from "react"
//import ReactDOM from "react-dom"
//import {subtract, sum, divide, multiply} from "./math"
//import MathCompStyle from "./MathCompStyle.css"
import AccountController from "./AccountController"
import AccountCardComp from "./AccountCardComp"
import AccountCardEditComp from "./AccountCardEditComp"
import AccountCardDetailsComp from "./AccountCardDetailsComp"
import "./style_Accounts.css";





class AccountControllerComp extends React.Component {
    constructor() {
        super()
        const accountController = new AccountController();
        accountController.addAccount("Jawad");
        accountController.addAccount("Greg");
        accountController.addAccount("Andy");

         this.state = {
            accountController : accountController,
            editModeOn : false,
            detailModeOn: false,
            newAccountNameInput : "",
            newDepositInput : "",
            newWithdrawInput : "",
            currentAccountIndex : ""
            
        }



    }


    editOnChange= (event) => {
                console.log(event.target.value)
                this.setState({
                    [event.target.name]: event.target.value
                    //newAccountNameInput: event.target.value
                })
       }

    withdrawOnChange= (event) => {
                console.log(event.target.value)
                this.setState({
                    newWithdrawInput: event.target.value
                })
       }


    depositOnChange= (event) => {
                console.log(event.target.value)
                this.setState({
                    newDepositInput: event.target.value
                })
       }


    editOnClick = (event) => {
        this.setState({
              editModeOn: true,
              detailModeOn: false,
              currentAccountIndex: event.target.id
        })
        console.log(event.target.id) 
    }

    submitOnClick = (event) => {
        const newAccountController = new AccountController()
        newAccountController.accountArray = [...this.state.accountController.accountArray];
        newAccountController.id = this.state.accountController.id
        const newState = newAccountController;
        newState.renameAccountName(Number(this.state.currentAccountIndex),this.state.newAccountNameInput)
        this.setState({
            editModeOn: false,
            accountController : newState,
            newAccountNameInput : ""
        })
        console.log(this.state.currentAccountIndex) 
    }

   addAccountHandleClick = (event) => {
   
        const newAccountController = new AccountController()
        newAccountController.accountArray = [...this.state.accountController.accountArray];
        newAccountController.id = this.state.accountController.id
       
        const newState = newAccountController;
        newState.addAccount("newAC")
        //console.log("Balance",this.account.balance);
        this.setState({
              accountController: newState
        }) 
        //console.log(this.state.accountController)
    }

    delOnClick = (event) => {
        //console.log("clicked",event.target.id)
        
        const newAccountController = new AccountController()
        newAccountController.accountArray = [...this.state.accountController.accountArray];
        newAccountController.id = this.state.accountController.id
        const newState = newAccountController;
        newState.removeAccount(Number(this.state.currentAccountIndex))

         this.setState({
            editModeOn: false,
            accountController : newState,
             detailModeOn: false
        }) 
    }
   
   detailOnClick = (event) => {
        this.setState({
            editModeOn: false,
              detailModeOn: true,
              currentAccountIndex: event.target.id
        })
        console.log(event.target.id) 
    }

    depositOnClick = (event) => {
        console.log("test",event.target.id)

        const newAccountController = new AccountController()
        newAccountController.accountArray = [...this.state.accountController.accountArray];
        newAccountController.id = this.state.accountController.id
        const newState = newAccountController;
        newState.accountArray[this.state.currentAccountIndex].deposit(this.state.newDepositInput)

         this.setState({
            //editModeOn: false,
            accountController : newState,
            newDepositInput : ""

            
        })  
         console.log(this.state.newDepositInput);
    }

    withdrawOnClick = (event) => {
        console.log("test",event.target.id)

        const newAccountController = new AccountController()
        newAccountController.accountArray = [...this.state.accountController.accountArray];
        newAccountController.id = this.state.accountController.id
        const newState = newAccountController;
        newState.accountArray[this.state.currentAccountIndex].withdraw(this.state.newWithdrawInput)

         this.setState({
            //editModeOn: false,
            accountController : newState,
            
        })  
         console.log(this.state.newDepositInput);
    }

    saveOnClick = (event) => {
        this.setState({
              detailModeOn: false,
              currentAccountIndex: event.target.id
        })
        //console.log(event.target.id) 
    }



    render() {
        const test = this.state.accountController
        
        const accountList = test.accountArray.map((item,i) => {
         return <AccountCardComp 
                key={item.id} 
                account={item} 
                accountIndex={i} 
                editOnClick = {this.editOnClick}
                delOnClick = {this.delOnClick}
                detailOnClick = {this.detailOnClick}
                />
        });

        const newAccountController = new AccountController()
        newAccountController.accountArray = [...this.state.accountController.accountArray];
        newAccountController.id = this.state.accountController.id
        const totalOfAccounts = newAccountController.totalOfAccounts()
        const maxAmount = Number((newAccountController.highestValueAccount()).balance)
        const maxAmountAccountId = (newAccountController.highestValueAccount()).id

                
    


        return (
            <div className= "container">
                <h1 className = "Header"> Account Controller </h1>
                    <ul>
                        <b>Total of All Accounts : {totalOfAccounts}</b><br/>
                        <b>Maximum Amount : {maxAmount} (Account ID:{maxAmountAccountId})</b><br/>
                    </ul>
                    <button id = "addAccount" className ="buttons" onClick={this.addAccountHandleClick}> Add Account </button>

                <div className="container2">


                    <div className="containerLeft">

                        
                      
                            {accountList}
                      
                    </div>

                    <div className="containerRight"> 
                            {this.state.editModeOn && <AccountCardEditComp 
                                                        newAccountNameInput={this.state.newAccountNameInput} 
                                                        submitOnClick={this.submitOnClick} 
                                                        inputOnChange = {this.editOnChange} />}

                            {this.state.detailModeOn && <AccountCardDetailsComp 
                                                        accountName={this.state.accountController.accountArray[this.state.currentAccountIndex]}
                                                        newDepositInput = {this.state.newDepositInput}
                                                        newWithdrawInput = {this.state.newWithdrawInput}
                                                        depositOnClick={this.depositOnClick} 
                                                        withdrawOnClick={this.withdrawOnClick}
                                                        depositOnChange = {this.depositOnChange}
                                                        withdrawOnChange = {this.withdrawOnChange}
                                                        saveOnClick = {this.saveOnClick}

                                                        />}
                    </div>
                </div> 
                    
                    
                        
            </div>
        )    
    }
}

export default AccountControllerComp