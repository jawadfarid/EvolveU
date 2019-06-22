import React from "react"
// import Community from "./Community"
// import CityCardComp from "./CityCardComp"
// //import CityCardEditComp from "./CityCardEditComp"
// import CityCardDetailsComp from "./CityCardDetailsComp"
import "./style_Accounts.css";




class Comp240Comp extends React.Component {
    constructor() {
        super()
        this.state = {
            temp_Arr : []
        }
    }

    componentDidMount() {
		fetch('http://127.0.0.1:5000/customer_list')
			.then(response => response.json())
			.then(users=> {this.setState({ temp_Arr: users})});

	}

    render() {

    	console.log(this.state.temp_Arr)
    	const custList = this.state.temp_Arr.map((item,i) => {
         				return 	<tr key = {i}>
	        						<td>{item.name}</td>
	        						<td>{item.id}</td>

	        					</tr>
	        				
	       });

	    
	        				

         				
        
        
        return (
            <div className= "topcontainer">
            	<h1>Customer Information </h1>                    
                <table>
                	<thead>
	                	<tr>
	                		<th>Customer Name</th>
	                		<th>Customer ID</th>
	                	</tr>
	                </thead>
	                	<tbody>
		                		{custList}
		               </tbody>
                </table>

                
               
                        
            </div>
        )    
    }
}

export default Comp240Comp