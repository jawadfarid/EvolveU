import React from "react";

class CityCardComp extends React.Component {
    constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
     
        return (
            <div className="cityCard">
                    <ul>City ID: {this.props.city.id}</ul>
                    <ul>City Name: {this.props.city.name}</ul>
                    <ul>Latitude: {this.props.city.latitude}</ul>
                    <ul>Longitude: {this.props.city.longitude}</ul>
                    <ul>Population: {this.props.city.population}</ul>
                    <ul>Sphere: {this.props.communityObj.whichSphere(this.props.cityIndex)} </ul>
                        

                    <button className = "button" id ={this.props.cityIndex} onClick={this.props.detailOnClick}> Details </button>
            </div>
        )    
    }
}

export default CityCardComp