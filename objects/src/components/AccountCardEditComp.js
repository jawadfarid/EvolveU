import React from "react"
import "./style_Accounts.css";





class AccountCardEditComp extends React.Component {
     constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
        console.log(this.props)
        return (
            <div className="editDiv">
                <input  value={this.props.newAccountNameInput} id = "editAmountInput"  name= "newAccountNameInput" onChange={this.props.inputOnChange}/><br/>
                <button onClick={this.props.submitOnClick}> Submit </button>
            </div>
        )    
    }
}

export default AccountCardEditComp