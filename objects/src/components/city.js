
class City {
	constructor(name, latitude, longitude, population,id) {
		this.name = name
		this.latitude = Number(latitude);
		this.longitude = Number(longitude);
		this.population = Number(population);
		this.id = id
	}

	show() {
		const test = this.name + " " + this.latitude + " " + this.longitude + " " + this.population;
	return test		
	}

	movedIn(value) {
		this.population = this.population + Number(value);
	}

	movedOut(value) {
		this.population = this.population - Number(value);
	}

	howBig() {
		let status = "NoStatus"
		if (this.population > 100000) {
		 	status = "City";
		} else if (this.population > 20000 && this.population <= 100000) {
		 	status = "Large Town";
		} else if (this.population > 1000 && this.population <= 20000) {
		 	 status = "Town";
		} else if (this.population > 100 && this.population <= 1000) {
		 	status = "Village";
		} else {
			 status = "Hamlet";
		}
	return status
	}
	

}


export default City;
	