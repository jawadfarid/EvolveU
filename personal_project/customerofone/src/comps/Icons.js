import React from "react"
import "./iconcomp.css"

class Icons extends React.Component {
    render() {

        return (
            <div className="iconcomp">
                    <button
                        className="button1"
                        id="button1"
                        onClick={this.props.clickId}
                    >
                        Customer 1
                    </button>
                    <button
                        className="button2"
                        id="button2"
                        onClick={this.props.clickId}
                    >
                        Customer 2
                    </button>
                    <button
                        className="button3"
                        id="button3"
                        onClick={this.props.clickId}
                    >
                        Customer 3
                </button>
            </div>
        )
    };

}


export default Icons;