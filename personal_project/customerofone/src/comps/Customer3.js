import React from "react"
import NavBar from './NavBarComp'
import "./customer.css"

class Customer3 extends React.Component {
    render() {
        return (
            <div>
                <NavBar
                    click={this.props.customerClick}
                    logoutHandle={this.props.logOut}
                    login={this.props.loginid}
                />
            </div>
        );
    }
}

export default Customer3