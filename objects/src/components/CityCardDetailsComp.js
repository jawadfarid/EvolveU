import React from "react"

class CityCardDetailsComp extends React.Component {
     constructor() {
        super()

         this.state = {
            
        }



    }


    render() {
        //console.log(this.props)
        return (
            <div className = "detialDiv">
            <br/>
                <label>ID:</label><input value = {this.props.cityName.id}  type = "number" disabled="disabled"/><br/>
                <label>Name:</label><input value = {this.props.cityName.name}  type = "text" disabled="disabled"/><br/>
                <label>Latitude</label><input value = {this.props.cityName.latitude}  type = "number" disabled="disabled"/><br/>
                <label>Longitude</label><input value = {this.props.cityName.longitude}  type = "number" disabled="disabled"/><br/>
                <label>Population</label><input value = {this.props.cityName.population}  type = "number" disabled="disabled"/><br/>
                <label>Sphere</label><input value = {this.props.communityObj.whichSphere(this.props.cityIndex)}  type = "text" disabled="disabled"/><br/>
                <label>Status</label><input value = {this.props.cityName.howBig()}  type = "text" disabled="disabled"/><br/><br/>


                

                <input id="idMovedInput" value = {this.props.newMovedInInput} type="number" onChange={this.props.movedInOnChange} placeholder = "Enter Moved In"/>
                <button className="buttons" id ={this.props.cityName.id} onClick={this.props.movedInOnClick}>  Moved In </button><br/>

                <input id="idMovedInput" value = {this.props.newMovedOutInput} type="number" onChange={this.props.movedOutOnChange} placeholder = "Enter Moved Out"/>
                <button className="buttons" id ={this.props.cityName.id} onClick={this.props.movedOutOnClick}>  Moved Out </button><br/>

                <button className="buttons" id ={this.props.cityName.id} onClick={this.props.closeOnClick}>  Close </button><br/>

                
                
            </div>
        )    
    }
}

export default CityCardDetailsComp