import React from "react"
import "./login.css"

class LoginComp extends React.Component {
  render() {
    return (
      <div className="logincomp">
        <header>
          <section className="header-content">
            <h1 className="header-title">EvolveU Banking</h1>
            <h3 className="header-subtitle">Data. For You.</h3>
            <button onClick={this.props.loginhandler} id='logIn'>Login</button>
          </section>
        </header>
      </div>
    );
  }
}

export default LoginComp