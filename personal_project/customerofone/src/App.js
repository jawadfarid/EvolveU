import React, {Component} from 'react';
import './App.css';
import Icons from "./comps/Icons"
import Customer1 from "./comps/Customer1"
import Customer2 from "./comps/Customer2"
import Customer3 from "./comps/Customer3"
import LoginComp from "./comps/LoginComp"
import StatComp from "./comps/StatComp";
import LoginField from "./comps/loginFieldComp"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            page: "login",
            loginId: "",
            stats: "all",
            loginForm: false
        }
    }

    // Click handler for dropdown menu inside Customer Comp

    customerClick = (event) => {
      this.setState(
          {stats: event.target.id}, () => console.log(this.state))
    }

    // The Login Button

    handleLogin = () => {
        this.setState({
          loginForm: true,
        })
    }

    //Onchange handler to update input fields

    inputUpdate = (event) => {
      this.setState({
        loginId: event.target.value
      })
    }

    //Onclick handler to render customer profile

    loginClick = () => {
      this.setState({
        page: this.state.loginId,
        loginForm: false
      })
    }

    //Onclick handler to logout

    logoutClick = () => {
      this.setState({
        page: 'login',
        stats: 'all',
        loginId: ''
      })
    }
    closeLogin = () => {
        this.setState({
            loginForm: false
        })
    }

    render() {
        let setPage;
        let statComp;
        // Conditional Rendering for the different Customers
        if (this.state.page === "Forest") {
            setPage = <Customer3
                customerClick={this.customerClick}
                loginid={this.state.loginId}
                logOut={this.logoutClick}
            />
            statComp = <StatComp
                loginid={this.state.loginId}
                stats={this.state.stats}
            />
        } else if (this.state.page === "Jawad") {
            setPage = <Customer1
                customerClick={this.customerClick}
                loginid={this.state.loginId}
                logOut={this.logoutClick}
            />
            statComp = <StatComp
                loginid={this.state.loginId}
                stats={this.state.stats}
            />
        } else if (this.state.page === "Joe") {
            setPage = <Customer2
                customerClick={this.customerClick}
                loginid={this.state.loginId}
                logOut={this.logoutClick}
            />
            statComp = <StatComp
                loginid={this.state.loginId}
                stats={this.state.stats}
            />
        } else if (this.state.page === "login") {
            setPage = <LoginComp
                loginhandler={this.handleLogin}
            />
        }

        return (
            <div className="App">
                {setPage}
                {statComp}
                {this.state.loginForm === true &&
                <LoginField 
                  inputChange={this.inputUpdate}
                  login={this.loginClick}
                  logOut={this.closeLogin}
                />
                }    
            </div>
        );
    }
}

export default App;
