import React from "react"
import "./Header.css"


class Header extends React.Component {
     

    render() {
        return (
            <div>
                <br/>
                <br/>
                <img id = "7" className = "image" src="https://img.icons8.com/dusk/64/000000/home.png" onClick = {this.props.handleClick} alt=""/>
                <img id = "1" className = "image" src="https://img.icons8.com/dusk/64/000000/cycling-road.png" onClick = {this.props.handleClick} alt=""/>
                <img id = "2" className = "image" src="https://img.icons8.com/dusk/64/000000/pokemon.png" onClick = {this.props.handleClick} alt=""/>
                <img id = "3" className = "image" src="https://img.icons8.com/doodle/48/000000/sleeping-baby.png" onClick = {this.props.handleClick} alt=""/>
                <img id = "4" className = "image" src="https://img.icons8.com/dusk/64/000000/cat.png" onClick = {this.props.handleClick} alt=""/>
                <img id = "5" className = "image" src="https://img.icons8.com/dusk/64/000000/cat.png" onClick = {this.props.handleClick} alt=""/>
                <img id = "6" className = "image" src="https://img.icons8.com/doodle/48/000000/sleeping-baby.png" onClick = {this.props.handleClick} alt=""/>
                <img id = "8" className = "image" src="https://img.icons8.com/doodle/48/000000/sleeping-baby.png" onClick = {this.props.handleClick} alt=""/>

           </div>
        )    
    }
}

export default Header