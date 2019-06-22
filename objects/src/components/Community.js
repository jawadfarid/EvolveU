import City from "./city"

class Community {
	constructor() {
		this.cityArray = [];
		this.id = 0
	}

	addCity(name,latitude, longitude, population) {
		//this.id++
		//this.accountArray.id++
		const newCity = new City(name,latitude, longitude, population,this.id)
		//console.log(newCity)
		this.cityArray.push(newCity)
		this.id++
	}
	

	whichSphere(index) {
	
		
		let loc = this.cityArray.map((item,i) => {
			if(i === index && item.latitude > 0 && item.latitude < 90) {
				return "Northern Hemisphere";				
			} else {
				return "Southern Hemisphere";
			}});

		return loc[0]
	}

	getMostNorthern() {
	 //		========= First Try  =========	
	 //		const test = this.cityArray.map(item => item.latitude);
	 // 	const highestLat = Math.max(...test)
	 // 	const highestObj = this.cityArray.filter(item => item.latitude === highestLat);
	 // 	return highestObj[0]

	 	const max = this.cityArray.reduce((prev, current) => (prev.latitude > current.latitude) ? prev : current)
	 	return max
	 }
	



	

	getMostSouthern() {
	 //		========= First Try  =========	
	 	// 	const test = this.cityArray.map(item => item.latitude);
	 	// const minLat = Math.min(...test)
	 	// const minObj = this.cityArray.filter(item => item.latitude === minLat);
	 	// return minObj[0]

	 	const max = this.cityArray.reduce((prev, current) => (prev.latitude < current.latitude) ? prev : current)
	 	return max
	 }


		
	
	 sumOfPopulation() {
	 	let total = this.cityArray.reduce((accumulator, currentValue)=> accumulator + currentValue.population,0);
	 	return total
	 }
	
	
}


export default Community;

