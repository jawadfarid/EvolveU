import React from "react"
import Community from "./Community"
import CityCardComp from "./CityCardComp"
//import CityCardEditComp from "./CityCardEditComp"
import CityCardDetailsComp from "./CityCardDetailsComp"
import "./style_Accounts.css";





class CommunityComp extends React.Component {
    constructor() {
        super()
        const community = new Community();
        community.addCity("Calgary", 70,252,100);
        community.addCity("Edmonton", -10,252455,150);
        community.addCity("Red Deer", 85,252457,106);

         this.state = {
            communityState : community,
            newNameInput : "",
            newLatitudeInput : "",
            newLongitudeInput: "",
            newPopulationInput: "",
            detailModeOn: false,
            currentCityIndex : "",
            newMovedInInput: "",
            newMovedOutInput: ""


            //editModeOn : false,
            
            // newAccountNameInput : "",
            // newDepositInput : "",
            // newWithdrawInput : "",
            
            
        }



    }


    nameOnChange= (event) => {
                console.log(event.target.value)
                if (event.target.name === "inputNameAttr"){
                this.setState({
                    newNameInput : event.target.value,
                   
                })
                } else if (event.target.name === "input2NameAttr") {
                    this.setState({
                    newLatitudeInput : event.target.value
                    })
                } else if (event.target.name === "input3NameAttr") {
                    this.setState({
                    newLongitudeInput : event.target.value
                    })
                } else if (event.target.name === "input4NameAttr") {
                    this.setState({
                    newPopulationInput : event.target.value
                    })
                }
                
       }

    movedOutOnChange= (event) => {
                console.log(event.target.value)
                this.setState({
                    newMovedOutInput: event.target.value
                })
       }


    movedInOnChange= (event) => {
                console.log(event.target.value)
                this.setState({
                    newMovedInInput: event.target.value
                })
       }


   //  editOnClick = (event) => {
   //      this.setState({
   //            editModeOn: true,
   //            detailModeOn: false,
   //            currentAccountIndex: event.target.id
   //      })
   //      console.log(event.target.id) 
   //  }

   //  submitOnClick = (event) => {
   //      const newAccountController = new AccountController()
   //      newAccountController.accountArray = [...this.state.accountController.accountArray];
   //      newAccountController.id = this.state.accountController.id
   //      const newState = newAccountController;
   //      newState.renameAccountName(Number(this.state.currentAccountIndex),this.state.newAccountNameInput)
   //      this.setState({
   //          editModeOn: false,
   //          accountController : newState,
   //          newAccountNameInput : ""
   //      })
   //      console.log(this.state.currentAccountIndex) 
   //  }

   addCityHandleClick = (event) => {
    console.log("clicked")

        const newCommunity = new Community()
        newCommunity.cityArray = [...this.state.communityState.cityArray];
        newCommunity.id = this.state.communityState.id
       
        const newState = newCommunity;
        newState.addCity(this.state.newNameInput,this.state.newLatitudeInput,this.state.newLongitudeInput,this.state.newPopulationInput)
        //console.log("Balance",this.account.balance);
        this.setState({
              communityState: newState
        }) 
        console.log(this.state.communityState)
    }

   //  delOnClick = (event) => {
   //      //console.log("clicked",event.target.id)
        
   //      const newAccountController = new AccountController()
   //      newAccountController.accountArray = [...this.state.accountController.accountArray];
   //      newAccountController.id = this.state.accountController.id
   //      const newState = newAccountController;
   //      newState.removeAccount(Number(this.state.currentAccountIndex))

   //       this.setState({
   //          editModeOn: false,
   //          accountController : newState,
   //           detailModeOn: false
   //      }) 
   //  }
   
   detailOnClick = (event) => {
        this.setState({
            //editModeOn: false,
            detailModeOn: true,
            currentCityIndex: event.target.id
        })
        console.log(event.target.id) 
    }

    movedInOnClick = (event) => {
        console.log("test",event.target.id)
        const newCommunity = new Community()
        newCommunity.cityArray = [...this.state.communityState.cityArray];
        newCommunity.id = this.state.communityState.id
       
        const newState = newCommunity;
        newState.cityArray[this.state.currentCityIndex].movedIn(this.state.newMovedInInput)

        this.setState({
            //editModeOn: false,
            communityState : newState,
            newMovedInInput : ""

            
        })  
         console.log(this.state.newDepositInput);
    }

    movedOutOnClick = (event) => {
        console.log("test",event.target.id)
        const newCommunity = new Community()
        newCommunity.cityArray = [...this.state.communityState.cityArray];
        newCommunity.id = this.state.communityState.id
       
        const newState = newCommunity;
        newState.cityArray[this.state.currentCityIndex].movedOut(this.state.newMovedOutInput)

         this.setState({
            //editModeOn: false,
            accountController : newState,
            newMovedOutInput:''
            
        })  
         //console.log(this.state);
    }

    closeOnClick = (event) => {
        this.setState({
              detailModeOn: false,
              currentCityIndex: event.target.id
        })
        //console.log(event.target.id) 
    }



    render() {
        const test = this.state.communityState
        
        const cityList = test.cityArray.map((item,i) => {
         return <CityCardComp
                key={item.id} 
                city={item}
                cityIndex = {i}
                communityObj = {this.state.communityState}
                detailOnClick = {this.detailOnClick}

        //         accountIndex={i} 
        //         editOnClick = {this.editOnClick}
        //         delOnClick = {this.delOnClick}
        //         detailOnClick = {this.detailOnClick}
        />
        });
         
        const totalOfPopulation = this.state.communityState.sumOfPopulation()
        const mostNorthern = (this.state.communityState.getMostNorthern()).name
        const mostSouthern = (this.state.communityState.getMostSouthern()).name

        

                
            


        return (
            <div>
                    <div className="topcontainer">
                      <h1 > Community </h1>

                      <input className ="inputs" name ="inputNameAttr" value = {this.state.newNameInput} type="text" onChange={this.nameOnChange} required placeholder="City Name"/> City Name<br/>
                      <input className ="inputs"name ="input2NameAttr" value = {this.state.newLatitudeInput} type="number" onChange={this.nameOnChange} required/> Latitude<br/>
                      <input className ="inputs"name ="input3NameAttr" value = {this.state.newLongitudeInput} type="number" onChange={this.nameOnChange} required/> Longitude<br/>
                      <input className ="inputs"name ="input4NameAttr" value = {this.state.newPopulationInput} type="number" onChange={this.nameOnChange} required/> Population<br/>
                      <button id = "addAccount" className ="buttons" onClick = {this.addCityHandleClick}> Add City </button><br/><br/>
                      
                          <b>Total Population : {totalOfPopulation}</b><br/>
                          <b>Most Northern : {mostNorthern}</b><br/>
                          <b>Most Southern : {mostSouthern}</b><br/><br/>
                          
                      
                    </div>
                
                <div className="container2">



                    <div className="containerLeft">
                     {cityList}

                        
                      
                            
                      
                    </div>

                    <div className="containerRight">
                        {this.state.detailModeOn && <CityCardDetailsComp 
                                                        cityName={this.state.communityState.cityArray[this.state.currentCityIndex]}
                                                        communityObj = {this.state.communityState}
                                                        cityIndex = {this.state.currentCityIndex}
                                                        newMovedInInput = {this.state.newMovedInInput}
                                                        movedInOnChange = {this.movedInOnChange}
                                                        movedInOnClick = {this.movedInOnClick}
                                                        newMovedOutInput = {this.state.newMovedOutInput}
                                                        movedOutOnChange = {this.movedOutOnChange}
                                                        movedOutOnClick = {this.movedOutOnClick}
                                                        closeOnClick = {this.closeOnClick}

                                                        />}


                    </div>

                    
                </div> 
                    
                    
                        
            </div>
        )    
    }
}

export default CommunityComp