import React from "react";

//import "./style_Accounts.css";





class FifoItemComp extends React.Component {
    constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
     console.log(this.props)
        return (
            <div className="FifoItemCard">
                    {this.props.fifoItem}<br></br>

            </div>
        )    
    }
}

export default FifoItemComp