import React, {Component} from "react"
import "./NavBarComp.css"


class NavBar extends Component {
    render() {
        return(
          <div>
            <div className="navBar">
                <div className="dropdown" id="catabtn">
                    <button className="dropbtn">Categories</button>
                        <div className="dropdown-content">
                            <a href="#" id="all" onClick={this.props.click}>All</a>
                            <a href="#" id="food" onClick={this.props.click}>Food</a>
                            <a href="#" id="entertainment" onClick={this.props.click}>Entertainment</a>
                            <a href="#" id="shopping" onClick={this.props.click}>Shopping</a>
                        </div>
                </div>
                <div>
                    {console.log('nav', this.props.login)}
                    <h1 className="welcome">Welcome {this.props.login}!</h1>
                </div>
                <div>
                    <button className="logbtn" id="logbtn" onClick={this.props.logoutHandle} id='login'>Log Out</button>
                </div>
            </div>
          </div>
        )
    }
}


export default NavBar