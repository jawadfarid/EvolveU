import React from "react";

//import "./style_Accounts.css";





class LifoItemComp extends React.Component {
    constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
     console.log(this.props)
        return (
            <div className="LifoItemCard">
                    {this.props.lifoItem}<br></br>

            </div>
        )    
    }
}

export default LifoItemComp