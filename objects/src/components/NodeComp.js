import React from "react";
import "./style_Accounts.css";


class NodeComp extends React.Component {
    constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
     console.log(this.props)
        return (
            <div className="NodeCard">
                    Current Node Subject: {this.props.mylist.position ? this.props.mylist.position.subject : "List is Empty"}<br></br><br></br>
                    Current Node Amount: {this.props.mylist.position ? this.props.mylist.position.amount : "List is Empty"}

                    
                        

                    
            </div>
        )    
    }
}

export default NodeComp